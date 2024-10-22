from django.shortcuts import render
from .models import Usuario
from .models import Tarea
from .models import Proyecto
from .models import Etiqueta
from .models import AsignacionTarea
from .models import Comentario

# Create your views here.
def index(request):
    return render(request, 'index.html')

#Mostramos todos los proyectos con sus datos correspondientes
def listar_proyectos(request):
    proyecto = Proyecto.objects.select_related("administrador").prefetch_related("colaboradores")
    proyecto = proyecto.all()
    
    return render(request, 'proyecto/lista.html', {"proyecto_mostrar":proyecto})


#Vamos a mostrar todas las tareas que tiene un proceso
def listar_tareas(request, id_proyecto):
    tarea = Tarea.objects.select_related("proyecto").select_related("creador").prefetch_related("usuarios")
    tarea = tarea.get(id = id_proyecto)
    
    return render(request, 'proyecto/tareas.html', {'tarea_mostrar':tarea})