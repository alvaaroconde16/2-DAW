from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Libro(models.Model):
    autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
    fecha_publicacion = models.DateTimeField(default=timezone.now)
    
class Autor(models.Model):
    nombre = models.CharField(max_length=200)
    biografia = models.TextField()
    fecha_nacimiento = models.DateTimeField(default=timezone.now)
    
class Miembro(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.EmailField()
    fecha_inscripcion = models.DateTimeField(default=timezone.now)