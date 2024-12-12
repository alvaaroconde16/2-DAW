from django.shortcuts import render,redirect, get_object_or_404
from .models import Usuario, Producto, Promocion
from django.db.models import Q, Sum
from .forms import *
from django.contrib import messages

# Create your views here.

def index(request):
    return render(request, 'principal.html')


#Empezamos mostrando una lista con todos los usuarios
def listar_usuarios(request):
    usuario = Usuario.objects.all()

    return render (request, 'usuarios/lista.html', {'usuarios_mostrar':usuario})


#Seguimos mostrando una lista con todos los productos
def listar_productos(request):
    producto = Producto.objects.all()

    return render (request, 'productos/lista.html', {'productos_mostrar':producto})


#Ahora vamos a mostrar una lista con todas las promociones
def listar_promociones(request):
    promocion = Promocion.objects.all()

    return render (request, 'promociones/lista.html', {'promociones_mostrar':promocion})


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



def producto_create(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda el nuevo usuario en la base de datos
            messages.success(request, 'Producto creado con éxito.')
            return redirect('listar_productos')  # Redirige a la lista de usuarios después de crear
    else:
        form = ProductoForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/producto_form.html', {'form': form})



def promocion_create(request):
    if request.method == 'POST':
        form = PromocionForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda el nuevo usuario en la base de datos
            messages.success(request, 'Promoción creada con éxito.')
            return redirect('listar_promociones')  # Redirige a la lista de usuarios después de crear
    else:
        form = PromocionForm()  # Si la solicitud es GET, muestra el formulario vacío

    return render(request, 'formularios/promocion_form.html', {'form': form})


########################################################################################################################################################################


def promocion_busqueda(request):
    # Si se ha enviado el formulario (request.GET contiene datos)
    if (len)(request.GET):
        formulario = BusquedaPromocionForm(request.GET)

        if formulario.is_valid():
            mensaje_busqueda = "Se ha buscado por los siguientes filtros:\n"
            
            promociones = Promocion.objects.all()  # Empezamos con todos los usuarios

            # Obtenemos los valores de los campos filtrados
            textoBusqueda = formulario.cleaned_data.get('textoBusqueda')
            descuento = formulario.cleaned_data.get('descuento')
            fecha_inicio = formulario.cleaned_data.get('fecha_inicio')
            fecha_fin = formulario.cleaned_data.get('fecha_fin')
            activa = formulario.cleaned_data.get('activa')
            usuarios = formulario.cleaned_data.get('usuarios')


            #Por cada filtro comprobamos si tiene un valor y lo añadimos a la QuerySet
            if(textoBusqueda != ""):
                promociones = promociones.filter(Q(nombre__contains=textoBusqueda) | Q(descripcion__contains=textoBusqueda))
                mensaje_busqueda +=" Nombre o contenido que contengan la palabra "+textoBusqueda+"\n"


            # Filtro por fecha de inicio
            if fecha_inicio:
                promociones = promociones.filter(fecha_inicio__date=fecha_inicio)
                
                
            # Filtro por fecha de fin mayor
            if (not fecha_inicio is None):
                mensaje_busqueda +=" La fecha sea mayor a "+datetime.strftime(fecha_inicio,'%d-%m-%Y')+"\n"
                promociones = promociones.filter(fecha_inicio__gte=fecha_inicio)
                
                
            # Filtro por fecha de fin menor
            if (not fecha_fin is None):
                mensaje_busqueda +=" La fecha sea mayor a "+datetime.strftime(fecha_fin,'%d-%m-%Y')+"\n"
                promociones = promociones.filter(fecha_fin__lte=fecha_fin)


            # Filtro de descuento mayores
            if (not descuento is None):
                mensaje_busqueda +=" El descuento sea mayor a "+ descuento +"\n"
                promociones = promociones.filter(descuento__gte=descuento)
                
                
            # Filtro permitir seleccionar varios usuarios
            if (len(usuarios) > 0):
                mensaje_busqueda +=" El idioma sea "+usuarios[0]
                filtroOR = Q(usuario=usuarios[0])
                for usuario in usuarios[1:]:
                    mensaje_busqueda += " o "+usuarios[1]
                    filtroOR |= Q(usuario=usuario)
                mensaje_busqueda += "\n"
                promociones =  promociones.filter(filtroOR)
                
                
            if activa is True:
                mensaje_busqueda +=" La promocion este activa "+ activa
                

            # Pasamos los usuarios filtrados y el mensaje a la plantilla
            return render(request, 'promociones/lista.html', {
                'usuarios_mostrar': promociones,
                'mensaje_busqueda': mensaje_busqueda
            })
    else:
        formulario = BusquedaPromocionForm()

    return render(request, 'formularios/promocion_busqueda.html', {'formulario': formulario})


########################################################################################################################################################################


def actualizar_promocion(request, promocion_id):
    promocion = Promocion.objects.get(id=promocion_id)

    # Variable para almacenar los datos del formulario
    datosFormulario = None
    
    # Si la solicitud es POST, obtenemos los datos del formulario
    if request.method == "POST":
        datosFormulario = request.POST

    # Creamos el formulario con los datos, y si es un POST, llenamos con los datos del usuario
    form = PromocionForm(datosFormulario, instance = promocion)


    # Si el método es POST y el formulario es válido
    if (request.method == "POST"): 
        if form.is_valid():
            try:
                # Guardamos los cambios del formulario
                form.save()
                
                # Mostramos un mensaje de éxito
                messages.success(request, f"Se ha actualizado la promocion {form.cleaned_data.get('nombre')} correctamente")
                
                # Redirigimos al usuario a la lista de usuarios
                return redirect('listar_promociones')
            
            except Exception as error:
                print(error)  # En un entorno real, deberíamos loguear esto o mostrarlo en la interfaz
        else:
            print("Errores del formulario:", form.errors)

    # Renderizamos el formulario en caso de GET o si el formulario no es válido
    return render(request, 'formularios/actualizar_promocion.html', {'form': form, 'promocion': promocion})


########################################################################################################################################################################


def eliminar_promocion(request,promocion_id):
    promocion = Promocion.objects.get(id=promocion_id)
    try:
        promocion.delete()
        messages.success(request, "Se ha elimnado la promoción "+promocion.nombre+" correctamente")
    except Exception as error:
        print(error)
    return redirect('listar_promociones')


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