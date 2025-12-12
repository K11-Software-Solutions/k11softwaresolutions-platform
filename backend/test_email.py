import os
import django
from django.core.mail import send_mail
from dotenv import load_dotenv

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'k11backend.settings')
django.setup()

# Load .env variables
load_dotenv()

# Send a test email
send_mail(
    subject='Test Email from Django',
    message='This is a test email sent from the test_email.py script.',
    from_email=os.getenv('EMAIL_HOST_USER', 'k11softwaresolutions@outlook.com'),
    recipient_list=[os.getenv('EMAIL_HOST_USER', 'kavita.jadhav.sdet@gmail.com')],
    fail_silently=False,
)

print('Test email sent (if configuration is correct).')
