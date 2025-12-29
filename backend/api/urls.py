from django.urls import path
from .views import (
    ActivateAccountView,
    RegisterView,
    DashboardView,
    ContactView,
    ServiceListView,
    api_root,
    PasswordResetRequestView,
    PasswordResetView,
    CreateCheckoutSessionView,
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("", api_root, name="api-root"),
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", TokenObtainPairView.as_view(), name="login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("dashboard/", DashboardView.as_view(), name="dashboard"),
    path("activate/<uidb64>/<token>/", ActivateAccountView.as_view(), name="activate"), 
    path("contact/", ContactView.as_view(), name="contact"),  # ✅ Added
    path("services/", ServiceListView.as_view(), name="services"),
    path("create-checkout-session/", CreateCheckoutSessionView.as_view(), name="create_checkout"),
    path("forgot-password/", PasswordResetRequestView.as_view(), name="forgot-password"),
    path("reset-password/", PasswordResetView.as_view(), name="reset-password"),
]
