from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    edad = models.IntegerField()
    contraseña = models.CharField(max_length=200)
    fecha_registro = models.DateField()

    
class Destino(models.Model):
    nombre = models.CharField(max_length=200)
    pais = models.CharField(max_length=50)
    descripcion = models.TextField()
    popularidad = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)])


class Reserva(models.Model):
    codigo_reserva = models.CharField(max_length=20)
    fecha_salida = models.DateTimeField()
    fecha_llegada = models.DateTimeField()
    numero_personas = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    #Relación Reserva con Usuario. One-to-one. Un usuario solo puede tener una reserva activa y una reserva solo puede estar asociada a un usuario.
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    

class Comentario(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    fecha_comentario = models.DateTimeField(auto_now_add=True)
    calificacion = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)])


class Alojamiento(models.Model):
    nombre = models.CharField(max_length=200)
    direccion = models.CharField(max_length=200)
    capacidad = models.IntegerField()
    tipo = models.CharField(max_length=50) #Hotel, hostal, apartamento...


class Extra(models.Model):
    TIPOS_EXTRAS = [
        ('actividad', 'Actividad'),
        ('guia', 'Guía Turístico'),
        ('transporte', 'Transporte Adicional'),
        ('comida', 'Comida Especial'),
        ('seguro', 'Seguro'),
    ]

    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50, choices=TIPOS_EXTRAS)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)


class Seguro(models.Model):
    tipo = models.CharField(max_length=200) # Ej: Viaje, Médico, etc.
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=7, decimal_places=2)
    proveedor = models.CharField(max_length=200)


class Transporte(models.Model):
    tipo = models.CharField(max_length=50)
    capacidad = models.PositiveIntegerField()
    disponible = models.BooleanField(default=True)
    costo_por_persona = models.DecimalField(max_digits=8, decimal_places=2)


class Promocion(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    descuento_porcentaje = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    activo = models.BooleanField(default=True)

    #Relación Promoción con Alojamiento. One-to-one. Una promoción esta únicamente en un alojamiento 
    alojamiento = models.OneToOneField(Alojamiento, on_delete=models.CASCADE)


class Factura (models.Model):
    numero_factura = models.CharField(max_length=20, unique=True)
    fecha_emision = models.DateField(auto_now_add=True)
    coste = models.DecimalField(max_digits=10, decimal_places=2)
    metodo_pago = models.CharField(max_length=50, choices=[('Tarjeta', 'Tarjeta'), ('Transferencia', 'Transferencia'), ('Efectivo', 'Efectivo')])

    #Relación Factura con Reserva. One-to-one. Una factura esta asociada a una sola reserva y una reserva tiene asociada una sola factura.
    reserva = models.OneToOneField(Reserva, on_delete=models.CASCADE)

