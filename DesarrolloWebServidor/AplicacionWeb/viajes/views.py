from django.shortcuts import render
from .models import Usuario, Destino, Reserva, Comentario, Alojamiento, Extra, Pasaporte, Transporte, Promocion, Factura, ExtraReserva
from django.db.models import Prefetch, Q

# Create your views here.
def index(request):
    return render(request, 'index.html')


#Empezamos mostrando una lista con todos los usuarios
def listar_usuarios(request):
    usuario = Usuario.objects.select_related('pasaporte').all()

    return render (request, 'usuarios/lista.html', {'usuarios_mostrar':usuario})


#Ahora vamos a mostrar todas las reservas que tiene cada usuario. Usamos un parámetro entero como es el id_usuario
def listar_reservas(request, id_usuario):
    reserva = Reserva.objects.select_related("usuario")
    reserva = reserva.filter(usuario = id_usuario)

    return render(request, 'usuarios/reservas.html', {'reservas_mostrar':reserva})


#Mostramos las reservas que estén comprendidas entre un año de inicio y un año de fin. Usamos un parámetro str como es la fecha_inicio y fecha_fin y AND
def reservas_rango(request, fecha_inicio, fecha_fin):
    reserva = Reserva.objects.select_related("usuario")
    reserva = reserva.filter(fecha_salida__gte=fecha_inicio, fecha_llegada__lte=fecha_fin)

    return render(request, 'usuarios/reservas.html', {'reservas_mostrar':reserva})


#Vamos a mostrar las reservas que no tienen ningún extra asociado
def reservas_sin_extras(request):
    reserva = Reserva.objects.select_related("usuario")
    reserva = reserva.filter(extrareserva=None)

    return render(request, 'usuarios/reservas.html', {'reservas_mostrar': reserva})


#Mostramos todos los destinos
def listar_destinos(request):
    destino = Destino.objects.all()

    return render(request, 'destinos/lista.html', {'destinos_mostrar':destino})



#Mostramos los usuarios que tengan en su pasaporte la misma nacionalidad o Española. Usamos el parámetro OR
def pasaporte_nacionalidad(request, nacionalidad):
    usuario = Usuario.objects.all()
    usuario = usuario.filter(Q(pasaporte__nacionalidad=nacionalidad) | Q(pasaporte__nacionalidad='Española'))

    return render(request, 'usuarios/lista.html', {'usuarios_mostrar':usuario})



# Vamos a mostrar el último usuario que comentó
def ultimo_usuario_comentar(request):
    comentario = Comentario.objects.select_related("usuario").order_by("-fecha_comentario")[:1].all()

    return render(request, 'usuarios/ultimoCom.html', {'comentarios_mostrar':comentario})