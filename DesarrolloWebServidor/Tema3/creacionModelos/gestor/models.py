from django.db import models
from django.utils import timezone

class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    correo = models.EmailField(max_length=200, unique=True)
    contrasenya = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(default=timezone.now)

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Proyecto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    duracion_estimada = models.FloatField()
    fecha_inicio = models.DateField(default=timezone.now)
    fecha_fin = models.DateField(default=timezone.now)

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Tarea(models.Model):
    ESTADOS_OPCIONES = [
        ('Pendiente', 'Pendiente'),
        ('Progreso', 'Progreso'),
        ('Completada', 'Completada'),
    ]

    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    prioridad = models.IntegerField()
    estado = models.CharField(max_length=20, choices=ESTADOS_OPCIONES, default='Pendiente')
    completada = models.BooleanField(default=False)
    fecha_creacion = models.DateField(default=timezone.now)
    hora_vencimiento = models.TimeField()

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Etiqueta(models.Model):
    nombre = models.CharField(max_length=200, unique=True)

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class AsignacionTarea(models.Model):
    observaciones = models.TextField()
    fecha_asignacion = models.DateTimeField(default=timezone.now)

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Comentario(models.Model):
    contenido = models.TextField()
    fecha_comentario = models.DateTimeField(default=timezone.now)
