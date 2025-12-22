from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class UserFlowTests(APITestCase):
    def test_register_login(self):
        # Register
        url = reverse('register')
        data = {
            'username': 'testuser',
            'email': 'testuser@example.com',
            'password': 'testpass123',
            'subscription': 'basic'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Login
        url = reverse('login')
        data = {'username': 'testuser', 'password': 'testpass123'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_forgot_password(self):
        user = User.objects.create_user(username='forgotuser', email='forgot@example.com', password='forgotpass')
        url = reverse('forgot-password')
        response = self.client.post(url, {'email': 'forgot@example.com'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_contact(self):
        url = reverse('contact')
        data = {'name': 'Test', 'email': 'test@example.com', 'message': 'Hello'}
        response = self.client.post(url, data)
        self.assertIn(response.status_code, [status.HTTP_201_CREATED, status.HTTP_200_OK])

    def test_services(self):
        url = reverse('services')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
