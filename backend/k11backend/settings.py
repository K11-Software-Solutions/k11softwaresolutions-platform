"""
Django settings for k11backend project.
Configured for Django REST Framework + JWT Authentication (SimpleJWT)
"""


from pathlib import Path
from datetime import timedelta
import os

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

from dotenv import load_dotenv
load_dotenv(os.path.join(BASE_DIR, '.env'))

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = "django-insecure-umce3*+t54vb!8$-x=s_7c4naqkqz@t31v7%(4!1&j%dpai$0y"
DEBUG = True
ALLOWED_HOSTS = ["*"]  # Allow all for dev; tighten in production

# Contact email settings (configurable)
CONTACT_RECIPIENT_EMAIL = "k11softwaresolutions@outlook.com"

# Activation link base URL (for emails)
ACTIVATION_BASE_URL = os.getenv("ACTIVATION_BASE_URL", "http://localhost:8000")

# ==============================
# 📧 Email Configuration (Outlook)
# ==============================
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"  # Prints emails to console for testing
EMAIL_HOST = "smtp.office365.com"  # Outlook/Office 365 SMTP server
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = "k11softwaresolutions@outlook.com"
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD")  # ⚠️ Use an app password (recommended)
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
# Applications
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Third-party apps
    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",

    # Your Django apps
    "api",  # Replace with your app name (where RegisterView lives)
]

# Middleware
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",  # must be above CommonMiddleware
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "k11backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "k11backend.wsgi.application"

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Password validators
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# Localization
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Static files
STATIC_URL = "static/"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ====================================================
# ✅ Django REST Framework + JWT CONFIGURATION
# ====================================================
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.AllowAny",
    ),
}

# JWT token lifetime
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "AUTH_HEADER_TYPES": ("Bearer",),
}

# ====================================================
# ✅ CORS (Cross-Origin for Frontend)
# ====================================================
CORS_ALLOW_ALL_ORIGINS = True  # for dev
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Next.js dev frontend
    "https://k11softwaresolutions.vercel.app",  # your deployed frontend
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "https://k11softwaresolutions.vercel.app",
]
