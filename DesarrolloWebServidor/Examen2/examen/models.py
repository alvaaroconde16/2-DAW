from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Usuario(models.Model):    
    nombre = models.CharField(max_length=200)
    edad = models.IntegerField()

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    puede_tener_promociones = models.BooleanField()

    def __str__(self):
        return self.nombre


class Promocion(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(null=True, blank=True)
    descuento = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)])
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    activa = models.BooleanField()
    
    #Relación Promocion con Producto. Many-to-one. Una promocion puede estar en varios productos, pero un producto solo puede tener una promocion.
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    
    #Relación Promocion con Usuario. Many-to-many. Una promocion pueden obtenerla varios usuarios, y un usuario puede obtener varias promociones.
    usuario = models.ManyToManyField(Usuario)