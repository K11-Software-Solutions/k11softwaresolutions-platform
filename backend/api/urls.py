from django.urls import path
from .views import ActivateAccountView, RegisterView, DashboardView, ContactView, ServiceListView, api_root
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
]
