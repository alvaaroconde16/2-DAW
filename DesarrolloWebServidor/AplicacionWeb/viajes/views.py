from django.shortcuts import render,redirect, get_object_or_404
from .models import Usuario, Destino, Reserva, Comentario, Alojamiento
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


#Empezamos mostrando una lista con todas las reservas
def listar_reservas(request):
    reserva = Reserva.objects.select_related('usuario').all()

    return render (request, 'reservas/reservas.html', {'reservas_mostrar':reserva})


#Ahora vamos a mostrar todas las reservas que tiene cada usuario. Usamos un parámetro entero como es el id_usuario
def listar_reservasUsuario(request, id_usuario):
    reserva = Reserva.objects.select_related("usuario").filter(usuario_id=id_usuario)

    return render(request, 'reservas/reserva_usuario.html', {'reservas_mostrar':reserva})


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


#Mostramos todos los destinos
def listar_alojamientos(request):
    alojamiento = Alojamiento.objects.all()

    return render(request, 'destinos/alojamientos.html', {'alojamientos_mostrar':alojamiento})



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


########################################################################################################################################################################


#A partir de aquí, creamos todos los formulario de creación.
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



def destino_create(request):
    if request.method == 'POST':
        form = DestinoForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda el nuevo destino en la base de datos
            messages.success(request, 'Destino creado con éxito.')
            return redirect('listar_destinos')  # Redirige a la lista de destinos después de crear
    else:
        form = DestinoForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/destino_form.html', {'form': form})



def reserva_create(request):
    if request.method == 'POST':
        form = ReservaForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda la nueva reserva en la base de datos
            messages.success(request, 'Reserva creada con éxito.')
            return redirect('listar_reservas')  # Redirige a la lista de reservas después de crear
    else:
        form = ReservaForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/reserva_form.html', {'form': form})



def alojamiento_create(request):
    if request.method == 'POST':
        form = AlojamientoForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda la nueva reserva en la base de datos
            messages.success(request, 'Alojamiento creado con éxito.')
            return redirect('listar_alojamientos')  # Redirige a la lista de reservas después de crear
    else:
        form = AlojamientoForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/alojamiento_form.html', {'form': form})


########################################################################################################################################################################


def usuario_busqueda(request):
    # Si se ha enviado el formulario (request.GET contiene datos)
    if request.GET:
        formulario = BusquedaUsuarioForm(request.GET)

        if formulario.is_valid():
            mensaje_busqueda = "Se ha buscado por los siguientes filtros:\n"
            usuarios = Usuario.objects.all()  # Empezamos con todos los usuarios

            # Obtenemos los valores de los campos filtrados
            nombre = formulario.cleaned_data.get('nombre')
            correo = formulario.cleaned_data.get('correo')
            telefono = formulario.cleaned_data.get('telefono')
            edad_minima = formulario.cleaned_data.get('edad_minima')
            edad_maxima = formulario.cleaned_data.get('edad_maxima')
            fecha_registro_desde = formulario.cleaned_data.get('fecha_registro_desde')
            fecha_registro_hasta = formulario.cleaned_data.get('fecha_registro_hasta')

            # Aplicamos los filtros según los valores introducidos en el formulario

            # Filtro por nombre
            if nombre:
                usuarios = usuarios.filter(Q(nombre__icontains=nombre))
                mensaje_busqueda += f"Nombre que contenga: {nombre}\n"
            
            # Filtro por correo
            if correo:
                usuarios = usuarios.filter(correo__icontains=correo)
                mensaje_busqueda += f"Correo que contenga: {correo}\n"
            
            # Filtro por teléfono
            if telefono:
                usuarios = usuarios.filter(telefono__icontains=telefono)
                mensaje_busqueda += f"Teléfono que contenga: {telefono}\n"

            # Filtro por edad mínima
            if edad_minima is not None:
                usuarios = usuarios.filter(edad__gte=edad_minima)
                mensaje_busqueda += f"Edad mínima: {edad_minima}\n"

            # Filtro por edad máxima
            if edad_maxima is not None:
                usuarios = usuarios.filter(edad__lte=edad_maxima)
                mensaje_busqueda += f"Edad máxima: {edad_maxima}\n"

            # Filtro por fecha de registro desde
            if fecha_registro_desde:
                usuarios = usuarios.filter(fecha_registro__gte=fecha_registro_desde)
                mensaje_busqueda += f"Fecha de registro desde: {fecha_registro_desde.strftime('%d-%m-%Y')}\n"
            
            # Filtro por fecha de registro hasta
            if fecha_registro_hasta:
                usuarios = usuarios.filter(fecha_registro__lte=fecha_registro_hasta)
                mensaje_busqueda += f"Fecha de registro hasta: {fecha_registro_hasta.strftime('%d-%m-%Y')}\n"

            # Pasamos los usuarios filtrados y el mensaje a la plantilla
            return render(request, 'usuarios/lista.html', {
                'usuario_busqueda': usuarios,
                'mensaje_busqueda': mensaje_busqueda
            })
    else:
        formulario = BusquedaUsuarioForm()

    return render(request, 'formularios/usuario_busqueda.html', {'formulario': formulario})




########################################################################################################################################################################


def actualizar_usuario(request, usuario_id):
    # Obtener el usuario por ID o devolver 404 si no existe
    usuario = get_object_or_404(Usuario, id=usuario_id)

    # Variable para almacenar los datos del formulario
    datosFormulario = None
    
    # Si la solicitud es POST, obtenemos los datos del formulario
    if request.method == "POST":
        datosFormulario = request.POST


    # Creamos el formulario con los datos, y si es un POST, llenamos con los datos del usuario
    form = UsuarioForm(datosFormulario, instance=usuario)


    # Si el método es POST y el formulario es válido
    if request.method == "POST" and form.is_valid():
        try:
            # Guardamos los cambios del formulario
            form.save()
            
            # Mostramos un mensaje de éxito
            messages.success(request, f"Se ha actualizado el usuario {form.cleaned_data.get('nombre')} correctamente")
            
            # Redirigimos al usuario a la lista de usuarios
            return redirect('usuarios/lista.html')
        
        except Exception as error:
            print(error)  # En un entorno real, deberíamos loguear esto o mostrarlo en la interfaz

    # Renderizamos el formulario en caso de GET o si el formulario no es válido
    return render(request, 'formularios/actualizar_usuario.html', {'form': form, 'usuario': usuario})


########################################################################################################################################################################


#Ahora vamos a crear las 4 páginas de error
def error_404_view(request, exception=None):
    return render(request, 'errores/404.html', None, None, 404)

def error_403_view(request, exception=None):
    return render(request, 'errores/403.html', None, None, 403)

def error_400_view(request, exception=None):
    return render(request, 'errores/400.html', None, None, 400)

def error_500_view(request, exception=None):
    return render(request, 'errores/500.html', None, None,500)