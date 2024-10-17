from django.shortcuts import render
from .models import Libro
from django.db.models import Q

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