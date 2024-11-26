from django.shortcuts import render,redirect
from .models import Usuario, Destino, Reserva, Comentario, Alojamiento, Extra, Pasaporte, Transporte, Promocion, Factura, ExtraReserva
from django.db.models import Q, Sum
from .forms import *
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'principal.html')


#Empezamos mostrando una lista con todos los usuarios
def listar_usuarios(request):
    usuario = Usuario.objects.select_related('pasaporte').all()

    return render (request, 'usuarios/lista.html', {'usuarios_mostrar':usuario})


#Ahora vamos a mostrar todas las reservas que tiene cada usuario. Usamos un parámetro entero como es el id_usuario
def listar_reservas(request, id_usuario):
    reserva = Reserva.objects.select_related("usuario").filter(usuario_id=id_usuario)

    return render(request, 'reservas/reservas.html', {'reservas_mostrar':reserva})


#Mostramos las reservas que estén comprendidas entre un año de inicio y un año de fin. Usamos un parámetro str como es la fecha_inicio y fecha_fin y AND
def reservas_rango(request, fecha_inicio, fecha_fin):
    reserva = Reserva.objects.select_related("usuario").filter(fecha_salida__gte=fecha_inicio, fecha_llegada__lte=fecha_fin)

    return render(request, 'reservas/reservas.html', {'reservas_mostrar':reserva})


#Vamos a mostrar las reservas que no tienen ningún extra asociado. Usamos la tabla intermedia ExtraReserva y usamos el None.
def reservas_sin_extras(request):
    reserva = Reserva.objects.select_related("usuario").filter(extrareserva=None)

    return render(request, 'reservas/reservas.html', {'reservas_mostrar': reserva})


#Mostramos todos los destinos
def listar_destinos(request):
    destino = Destino.objects.all()

    return render(request, 'destinos/destinos.html', {'destinos_mostrar':destino})



#vamos a mostrar todos los alojamientos asociados a un destino
def alojamientos_destino(request, id_destino):
    alojamiento = Alojamiento.objects.select_related("destino", "reserva").filter(destino_id=id_destino)

    return render(request, 'destinos/alojamientos.html', {'alojamientos_mostrar':alojamiento})



#Mostramos los usuarios que tengan en su pasaporte la misma nacionalidad o Española. Usamos el parámetro OR
def pasaporte_nacionalidad(request, nacionalidad):
    usuario = Usuario.objects.select_related("pasaporte").filter(Q(pasaporte__nacionalidad=nacionalidad) | Q(pasaporte__nacionalidad='Española'))

    return render(request, 'usuarios/lista.html', {'usuario':usuario})



# Vamos a mostrar el último usuario que comento. Usamos el order_by para ordenar la fecha de comentario y el limit para coger uno solo que será el último
def ultimo_usuario_comentar(request):
    comentario = Comentario.objects.select_related('usuario').order_by("-fecha_comentario")[:1].all()

    return render(request, 'usuarios/ultimoCom.html', {'comentarios_mostrar':comentario})



#Mostramos todos los comentarios de un usuario en específico
def comentarios_usuario(request, id_usuario):
    comentarios = Comentario.objects.select_related('usuario').filter(usuario_id=id_usuario).all()
    
    return render(request, 'usuarios/comentarios.html', {'comentarios_mostrar':comentarios})



#Mostramos la suma de todos los precios de las reservas. Usamos el parámetro aggregate el cual se usa para realizar cálculos en los datos de una tabla y 
#devolver un solo valor, en lugar de una lista de resultados. Podemos usar el Sum, el Avg, y el Count por ejemplo
def total_precios_reservas(request):
    total_precio = Reserva.objects.select_related("usuario").aggregate(Sum('precio'))  

    return render(request, 'reservas/total_precios.html', {'precio_mostrar':total_precio})



def usuario_create(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda el nuevo usuario en la base de datos
            messages.success(request, 'Usuario creado con éxito.')
            return redirect('listar_usuarios')  # Redirige a la lista de usuarios después de crear
    else:
        form = UsuarioForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/usuario_form.html', {'form': form})



#Ahora vamos a crear las 4 páginas de error
def error_404_view(request, exception=None):
    return render(request, 'errores/404.html', None, None, 404)

def error_403_view(request, exception=None):
    return render(request, 'errores/403.html', None, None, 403)

def error_400_view(request, exception=None):
    return render(request, 'errores/400.html', None, None, 400)

def error_500_view(request, exception=None):
    return render(request, 'errores/500.html', None, None,500)