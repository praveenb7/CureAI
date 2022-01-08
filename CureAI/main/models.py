from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Prediction(models.Model):
    type = models.CharField(max_length=50, primary_key=False)
    prediction = models.CharField(max_length=50)
    description = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    username = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.type