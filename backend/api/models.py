from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="userprofile")
    subscription = models.CharField(max_length=50, choices=[
        ("basic", "Basic (Free)"),
        ("pro", "Pro"),
        ("enterprise", "Enterprise"),
    ])
    reset_token = models.CharField(max_length=128, blank=True, default="")

    def __str__(self):
        return f"{self.user.username} - {self.subscription}"

# Signal to create UserProfile on User creation
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
