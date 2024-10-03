from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Animal(models.Model):
    cuidador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nombre = models.CharField(max_length = 200)
    tipo = models.CharField(max_length = 200)
    
class Protectora(models.Model):
    nombre = models.CharField(max_length = 200)
    descripcion = models.TextField()
    fecha_creacion = models.DateTimeField(default=timezone.now)
    
class Colaborador(models.Model):
    nombre = models.CharField(max_length = 200)
    cargo = models.CharField(max_length = 200)
    fecha_entrada_protectora = models.DateTimeField(default=timezone.now)