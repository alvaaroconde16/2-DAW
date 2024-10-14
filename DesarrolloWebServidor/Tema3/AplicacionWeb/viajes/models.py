from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=200, verbose_name="Nombre Completo")
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    edad = models.IntegerField()
    contraseña = models.CharField(max_length=200)
    fecha_registro = models.DateField(null=True, blank=True)



class Destino(models.Model):
    nombre = models.CharField(max_length=200)
    pais = models.CharField(max_length=50)
    descripcion = models.TextField(null=True, blank=True)
    popularidad = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)])



class Reserva(models.Model):
    codigo_reserva = models.CharField(max_length=20)
    fecha_salida = models.DateTimeField()
    fecha_llegada = models.DateTimeField()
    numero_personas = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    #Relación Reserva con Usuario. Many-to-one. Un usuario puede realizar varias reservas, pero cada reserva está asociada a un único usuario.
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    


class Comentario(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    fecha_comentario = models.DateTimeField(auto_now_add=True)
    calificacion = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)])

    #Relación Comentario con Usuario. Many-to-one. Un usuario puede hacer muchos comentarios, pero cada comentario está asociado a un solo usuario.
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)



class Alojamiento(models.Model):
    nombre = models.CharField(max_length=200)
    direccion = models.CharField(max_length=200)
    capacidad = models.IntegerField()
    tipo = models.CharField(max_length=50) #Hotel, hostal, apartamento...

    #Relación Alojamiento con Destino. Many-to-one. Muchos alojamientos pueden estar ubicados en un mismo destino, pero cada alojamiento pertenece a un único destino.
    destino = models.ForeignKey(Destino, on_delete=models.CASCADE)



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

    #Relación Extra con Reserva. Many-to-many. (Tabla intermedia). Una reserva puede incluir muchos extras y un extra puede estar asociado a varias reservas.
    reserva = models.ManyToManyField(Reserva, through="ExtraReserva")



class Pasaporte(models.Model):
    numero = models.CharField(max_length=50, unique=True)
    fecha_emision = models.DateField()
    fecha_expiracion = models.DateField()
    nacionalidad = models.CharField(max_length=50)

    #Relación Pasaporte con Usuario. One-to-one. Un usuario tiene un unico pasaporte, y un pasaporte pertenece a un solo usuario.



class Transporte(models.Model):
    tipo = models.CharField(max_length=50)
    capacidad = models.PositiveIntegerField()
    disponible = models.BooleanField(default=True)
    costo_por_persona = models.DecimalField(max_digits=8, decimal_places=2)

    #Relación Transporte con Destino. Many-to-many. Un destino puede tener múltiples opciones de transporte, y un tipo de transporte puede servir a múltiples destinos.
    destino = models.ManyToManyField(Destino)



class Promocion(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    descuento_porcentaje = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    activo = models.BooleanField(default=True)

    #Relación Promoción con Alojamiento. One-to-one. Una promoción esta únicamente en un alojamiento 
    alojamiento = models.OneToOneField(Alojamiento, on_delete=models.CASCADE)

    #Relación Promoción con Destino. Many-to-may. Una promoción puede estar disponible en varios destinos, y un destino puede tener varias promociones aplicadas.
    destino = models.ManyToManyField(Destino)



class Factura (models.Model):
    numero_factura = models.CharField(max_length=20, unique=True)
    fecha_emision = models.DateField(auto_now_add=True)
    coste = models.DecimalField(max_digits=10, decimal_places=2)
    metodo_pago = models.CharField(max_length=50, choices=[('Tarjeta', 'Tarjeta'), ('Transferencia', 'Transferencia'), ('Efectivo', 'Efectivo')])

    #Relación Factura con Reserva. One-to-one. Una factura esta asociada a una sola reserva y una reserva tiene asociada una sola factura.
    reserva = models.OneToOneField(Reserva, on_delete=models.CASCADE)



#Tabla intermedia entre relación de Extra y Reserva.
class ExtraReserva(models.Model):
    reserva = models.ForeignKey(Reserva, on_delete=models.CASCADE)
    extra = models.ForeignKey(Extra, on_delete=models.CASCADE)
