from django.shortcuts import render
from .models import Usuario
from .models import Tarea
from .models import Proyecto
from .models import Etiqueta
from .models import AsignacionTarea
from .models import Comentario

# Create your views here.
#Esta es la vista para el modelo de usuario
def usuario_list(request):
    usuarios = Usuario.objects.all()
    return render(request, 'gestor/usuario_list.html', {"usuario_mostrar":usuarios})


#Esta es la vista para el modelo de tarea
def tarea_list(request):
    tareas = Tarea.objects.all()
    return render(request, 'gestor/tarea_list.html', {"tarea_mostrar":tareas})


#Esta es la vista para el modelo de proyecto
def proyecto_list(request):
    proyectos = Proyecto.objects.all()
    return render(request, 'gestor/proyecto_list.html', {"proyecto_mostrar":proyectos})


#Esta es la vista para el modelo de etiqueta
def etiqueta_list(request):
    etiquetas = Etiqueta.objects.all()
    return render(request, 'gestor/etiqueta_list.html', {"etiqueta_mostrar":etiquetas})


#Esta es la vista para el modelo de asignaciontarea
def asignaciontarea_list(request):
    asignaciontareas = AsignacionTarea.objects.all()
    return render(request, 'gestor/asignaciontarea_list.html', {"asignaciontarea_mostrar":asignaciontareas})


#Esta es la vista para el modelo de comentario
def comentario_list(request):
    comentarios = Comentario.objects.all()
    return render(request, 'gestor/comentario_list.html', {"comentario_mostrar":comentarios})