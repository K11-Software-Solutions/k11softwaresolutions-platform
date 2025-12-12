from rest_framework import serializers

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    subscription = serializers.ChoiceField(choices=[('basic', 'Basic'), ('pro', 'Pro'), ('enterprise', 'Enterprise')])
