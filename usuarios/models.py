from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    rut = models.CharField(max_length=9)

    #LOS DATOS SE AGREGAN SE DEBEN AÑADIR A FORM.PY

    def __str__(self):
        return self.email
