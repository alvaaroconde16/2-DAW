from django.shortcuts import render
from .models import Libro
from .models import Autor
from .models import Miembro

# Create your views here.
#Esta es la vista para el modelo de libro
def libro_list(request):
    libros = Libro.objects.all()
    return render(request, 'biblioteca/libro_list.html', {"libro_mostrar":libros})

#Esta es la vista para el modelo de autor
def autor_list(request):
    autors = Autor.objects.all()
    return render(request, 'biblioteca/autor_list.html', {"autor_mostrar":autors})

#Esta es la vista para el modelo de miembro
def miembro_list(request):
    miembros = Miembro.objects.all()
    return render(request, 'biblioteca/miembro_list.html', {"miembro_mostrar":miembros})