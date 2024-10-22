from django.shortcuts import render
from .models import Libro
from .models import Cliente
from .models import Biblioteca
from django.db.models import Q, Prefetch, F
from django.db.models import Avg, Max, Min
from django.views.defaults import page_not_found

# Create your views here.
def index(request):
    return render(request, 'index.html')

#Sacar datos de libros
def listar_libros(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.all()
    #libros = (Libro.objects.raw("SELECT * FROM biblioteca_libro l "
    #                            + " JOIN biblioteca_biblioteca b ON l.biblioteca_id = b.id "
    #                            + " JOIN biblioteca_libro_autores la ON la.libro_id = l.id ")
    #          )
    return render(request, 'libro/lista.html', {"libros_mostrar":libros})


#Sacar un libro con su id
def dame_libro(request, id_libro):
    QSlibro = (Libro.objects.select_related("biblioteca").prefetch_related("autores"))
    libro = QSlibro.get(id = id_libro)
    
    return render(request, 'libro/libro.html', {"libro_mostrar":libro})


#Ahora vamos a sacar los libros de un año y mes en concreto
def dame_libros_fecha(request, anyo_libro, mes_libro):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(fecha_publicacion__year=anyo_libro, fecha_publicacion__month=mes_libro)
    
    return render(request, 'libro/lista.html', {"libros_mostrar":libros})


#Vamos a mostrar los libros que tengan el mismo idioma
def dame_libros_idioma(request,idioma):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(Q(tipo=idioma) | Q(tipo="ES")).order_by("fecha_publicacion")
    return render (request, 'libro/lista.html', {"libros_mostrar":libros})


#Vamos a mostrar los libros de una biblioteca
def dame_libros_biblioteca(request, id_biblioteca, texto_libro):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(biblioteca=id_biblioteca).filter(descripcion__contains=texto_libro).order_by("-nombre")  #-nombre es para ordenarlo en modo descendente
    
    return render(request, 'libro/lista.html', {"libros_mostrar":libros})


#Vamos a mostrar el ultimo cliente que se llevo un libro en concreto
def dame_ultimo_cliente_libro(reques, libro):
    cliente = Cliente.objects.filter(prestamo__libro=libro).order_by("-prestamo__fecha_prestamo")[:1].get()
    return render(reques, 'cliente/cliente.html', {"cliente":cliente})


#Vamos a ver los libros que no han sido prestados (Noe stá el nombre en prestamos)
def libros_no_prestados(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(prestamo=None)
    return render(request, 'libro/lista.html', {"libros_mostrar":libros})


#Vamos a mostrar una biblioteca con todos sus libros
def dame_biblioteca(request, id_biblioteca):
    #biblioteca = Biblioteca.objects.get(id=id_biblioteca)
    biblioteca = Biblioteca.objects.prefetch_related(Prefetch("libros_biblioteca")).get(id=id_biblioteca)
    return render(request, 'biblioteca/biblioteca.html', {"biblioteca":biblioteca})


#Una url que muestro los libros que contengan en la descripcion del titulo del libro
def dame_libros_titulo_en_descripcion(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(descripcion__contains=F("nombre"))
    
    return render(request, 'libro/lista.html', {"libros_mostrar":libros})


#Una url que muestra la media, máximo y mínimo de puntos de todos los clientes de la Biblioteca
def dame_agrupaciones_puntos_cliente(request):
    resultado = Cliente.objects.aggregate(Avg("puntos"), Max("puntos"), Min("puntos"))
    media = resultado["puntos__avg"]
    maximo = resultado["puntos__max"]
    minimo = resultado["puntos__min"]
    
    return render(request, 'cliente/agrupaciones.html', {"media":media, "maximo":maximo, "minimo":minimo})


#Creamos la vista de nuestra página de error
def mi_error_404(request, exception=None):
    return render(request, 'errores/404.html', None, None, 404)