from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Sopa(models.Model):
    sabor = models.CharField(max_length=200)
    proveedor = models.CharField(max_length=200)
    fecha_produccion = models.DateField()
    fecha_caducidad = models.DateField()
    
    

class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    correo = models.EmailField() 
    telefono = models.CharField(max_length=20)
    edad = models.IntegerField()
    


class Votacion(models.Model):
    puntuacion = models.FloatField(validators=[MinValueValidator(1), MaxValueValidator(5)])  #Obligamos a que el usuario introduzca un número entre 1 y 5.
    comentario = models.TextField()
    fecha_votacion = models.DateTimeField()
    
    #Relación Votacion con Sopa. Many-to-one. Una Sopa puede tener varias votaciones, pero una votacion solo puede estar en una sopa
    sopa = models.ForeignKey(Sopa, on_delete=models.CASCADE)
    
    #Relación Votacion con Usuario. Many-to-one. Un usuario puede realizar varias votaciones, pero una votación es asignada a un único usuario.
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    
    
    
class Cuenta(models.Model):
    BANCO = [
        ('caixa', 'Caixa'),
        ('bbva', 'BBVA'),
        ('unicaja', 'UNICAJA'),
        ('ing', 'ING'),
    ]
    
    banco = models.CharField(max_length=50, choices=BANCO)
    numero_cuenta = models.IntegerField()
    
    #Relación Cuenta con Usuario. One-to-one. Un usuario solo puede tener una cuenta y una cuenta es asignada a un solo usuario.
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)