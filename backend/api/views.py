from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
from django.core.mail import send_mail
from .serializers import PasswordResetRequestSerializer, PasswordResetSerializer
from .models import UserProfile
from django.contrib.auth.hashers import make_password

class PasswordResetRequestView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                token = get_random_string(64)
                user.userprofile.reset_token = token
                user.userprofile.save()
                reset_url = f"{request.build_absolute_uri('/reset-password/')}?token={token}"
                send_mail(
                    "Password Reset",
                    f"Click the link to reset your password: {reset_url}",
                    "k11softwaresolutions@outlook.com",
                    [email],
                )
            except User.DoesNotExist:
                pass  # Don't reveal if user exists
            return Response({"msg": "If your email is registered, you will receive a reset link."})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetView(APIView):
    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            token = serializer.validated_data['token']
            password = serializer.validated_data['password']
            try:
                profile = UserProfile.objects.get(reset_token=token)
                user = profile.user
                user.password = make_password(password)
                user.save()
                profile.reset_token = ""
                profile.save()
                return Response({"msg": "Password reset successful."})
            except UserProfile.DoesNotExist:
                return Response({"msg": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from rest_framework.views import APIView
from rest_framework.decorators import api_view

# API root endpoint
@api_view(["GET"])
def api_root(request):
    return Response({"message": "K11 API is running!", "status": "ok"})
# --- Service List View ---
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

class ServiceListView(APIView):
    def get(self, request):
        # Example static data, replace with DB query if needed
        services = [
            {
                "id": 1,
                "name": "K11 Software Solutions",
                "website": "https://www.softwaretestautomation.org",
                "description": (
                    "K11 Software Solutions is a consulting and training practice led by a seasoned Test Automation Architect and Full-Stack Engineer with over 12+ years of industry experience.\n\n"
                    "We specialize in helping teams and individuals build real-world skills and scalable solutions in:\n\n"
                    "**Full-Stack Test Automation**\n"
                    "UI, API, database, and cloud-based validation — aligned with enterprise workflows\n\n"
                    "**AI/ML in Testing**\n"
                    "Model-based test design, Gherkin scenario generation, and intelligent test workflows\n\n"
                    "**Custom Development Consulting**\n"
                    "Hands-on development in Java, Python, REST APIs, test frameworks, and microservices\n\n"
                    "**Upskilling & Mentorship**"
                ),
            },
            {
                "id": 2,
                "name": "SDET Insights LinkedIn Newsletter",
                "website": "https://www.linkedin.com/newsletters/7354009267919613954/",
                "description": (
                    "Professional technical writing, documentation, and thought leadership for software teams and products.\n\n"
                    "Read our latest insights and best practices in the SDET Insights LinkedIn Newsletter."
                ),
            },
        ]
        return Response(services)
    
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.conf import settings
from .models import UserProfile
from .serializers import RegisterSerializer
import stripe
from django.conf import settings


class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        data = serializer.validated_data
        username = data["username"]
        email = data["email"]
        password = data["password"]
        subscription = data["subscription"]
        subscription_charge = data.get("subscription_charge")

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return Response({"error": "Email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        from django.db import IntegrityError
        try:
            # Create inactive user
            user = User.objects.create_user(username=username, email=email, password=password, is_active=False)
            # Create or update profile and save subscription charge if provided
            UserProfile.objects.update_or_create(user=user, defaults={
                'subscription': subscription,
                'subscription_charge': subscription_charge,
            })
        except IntegrityError as e:
            if 'username' in str(e):
                return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)
            if 'email' in str(e):
                return Response({"error": "Email already exists."}, status=status.HTTP_400_BAD_REQUEST)
            return Response({"error": "Registration failed due to a database error."}, status=status.HTTP_400_BAD_REQUEST)

        # Generate activation link
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)
        base_url = getattr(settings, "ACTIVATION_BASE_URL", "http://localhost:8000")
        activation_link = f"{base_url}/api/activate/{uid}/{token}/"

        # Send email
        subject = "Activate Your K11 Software Solutions Account"
        message = f"Hi {user.username},\n\nPlease activate your account by clicking the link below:\n{activation_link}\n\nThank you for joining us!"
        send_mail(subject, message, settings.EMAIL_HOST_USER, [user.email])

        return Response(
            {"message": "Registration successful! Please check your email to activate your account."},
            status=status.HTTP_201_CREATED,
        )

from django.utils.http import urlsafe_base64_decode

class ActivateAccountView(APIView):
    def get(self, request, uidb64, token):
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (User.DoesNotExist, ValueError, TypeError, OverflowError):
            return Response({"error": "Invalid activation link."}, status=status.HTTP_400_BAD_REQUEST)

        # Validate token
        if default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({"message": "Account activated successfully! You can now log in."}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Activation link is invalid or expired."}, status=status.HTTP_400_BAD_REQUEST)


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        subscription = None
        if hasattr(user, 'profile'):
            subscription = user.profile.subscription
        return Response({
            "message": f"Welcome {user.username}, this is your dashboard data!",
            "email": user.email,
            "subscription": subscription
        })

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

class ContactView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        message = request.data.get("message")

        if not all([name, email, message]):
            return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Option 1: Send Email (simple example)
        from django.conf import settings
        contact_recipient = getattr(settings, "CONTACT_RECIPIENT_EMAIL", "support@k11softwaresolutions.com")
        contact_sender = "noreply@k11softwaresolutions.com"
        try:
            send_mail(
                subject=f"New Contact from {name}",
                message=f"Message from {name} <{email}>:\n\n{message}",
                from_email=contact_sender,
                recipient_list=[contact_recipient],
                fail_silently=False,
            )
        except Exception as e:
            print("Email sending failed:", e)

        # Option 2 (optional): Save to DB if you want
        # Contact.objects.create(name=name, email=email, message=message)

        return Response({"success": "Message sent successfully!"}, status=status.HTTP_200_OK)


class CreateCheckoutSessionView(APIView):
    """Create a Stripe Checkout Session for paid subscriptions.

    Expects JSON: { subscription, email, subscription_charge }
    Returns: { url }
    """
    def post(self, request):
        data = request.data
        subscription = data.get("subscription")
        email = data.get("email")
        amount = data.get("subscription_charge")

        if not subscription or not email or not amount:
            return Response({"error": "subscription, email and subscription_charge are required"}, status=status.HTTP_400_BAD_REQUEST)

        stripe.api_key = getattr(settings, "STRIPE_SECRET_KEY", None)
        if not stripe.api_key:
            return Response({"error": "Stripe API key not configured"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            unit_amount = int(float(amount) * 100)
            success_url = getattr(settings, "STRIPE_SUCCESS_URL", "http://localhost:3000/register-success?session_id={CHECKOUT_SESSION_ID}")
            cancel_url = getattr(settings, "STRIPE_CANCEL_URL", "http://localhost:3000/register?cancelled=true")

            session = stripe.checkout.Session.create(
                payment_method_types=["card"],
                line_items=[{
                    "price_data": {
                        "currency": "usd",
                        "product_data": {"name": f"{subscription} subscription"},
                        "unit_amount": unit_amount,
                    },
                    "quantity": 1,
                }],
                mode="payment",
                customer_email=email,
                success_url=success_url,
                cancel_url=cancel_url,
                metadata={"subscription": subscription, "email": email, "amount": str(amount)},
            )

            return Response({"url": session.url})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
