from rest_framework import serializers

class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordResetSerializer(serializers.Serializer):
    token = serializers.CharField()
    password = serializers.CharField()
from rest_framework import serializers

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    subscription = serializers.ChoiceField(choices=[('basic', 'Basic'), ('pro', 'Pro'), ('enterprise', 'Enterprise')])
    subscription_charge = serializers.DecimalField(max_digits=8, decimal_places=2, required=False)
