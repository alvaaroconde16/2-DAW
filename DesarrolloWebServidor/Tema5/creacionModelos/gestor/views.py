from django.shortcuts import render
from .models import Usuario
from .models import Tarea
from .models import Proyecto
from .models import Etiqueta
from .models import AsignacionTarea
from .models import Comentario

# Create your views here.
def index(request):
    return render(request, 'principal.html')

#Mostramos todos los proyectos con sus datos correspondientes
def listar_proyectos(request):
    proyecto = Proyecto.objects.select_related("administrador").prefetch_related("colaboradores")
    proyecto = proyecto.all()
    
    return render(request, 'proyecto/lista.html', {"proyecto_mostrar":proyecto})



#Vamos a mostrar todas las tareas que tiene un proceso ordenandolos por la fecha de creación de forma descendente
def listar_tareas(request, id_proyecto):
    tarea = Tarea.objects.select_related("proyecto", "creador").prefetch_related("usuarios").order_by('-fecha_creacion')
    tarea = tarea.filter(proyecto=id_proyecto)
    0
    return render(request, 'proyecto/tareas.html', {'tarea_mostrar':tarea})



#Vamos a mostrar todos los usuarios que están asignados a una tarea ordenandolos por fecha de asignacion de forma ascendente
def listar_usuarios_tarea(request, id_tarea):
    asignacion = AsignacionTarea.objects.select_related("usuario", "tarea")
    asignacion = asignacion.filter(tarea_id=id_tarea).order_by('fecha_asignacion')
    
    return render(request, 'usuarios/usuarios.html', {'asignacion_mostrar':asignacion})



#Mostramos todas las tareas que tengan un texto concreto en observaciones
def tareas_con_observaciones(request, id_proyecto ,observacion):
    asignacionesTareas = AsignacionTarea.objects.select_related("usuario", "tarea")
    #tarea = Tarea.objects.select_related("proyecto").select_related("creador").prefetch_related("usuarios")
    asignacionesTareas = asignacionesTareas.filter(tarea__proyecto=id_proyecto).filter(observaciones__contains=observacion)

    return render(request, 'tarea/observaciones.html', {'asignaciones':asignacionesTareas})



#Vamosa mostrar todas las tareas que estén realizadas entre dos años y que su estado sea: 'Completada'
def tareas_completadas(request, anyo_inicio, anyo_fin):   
    tareas = Tarea.objects.select_related("proyecto", "creador").prefetch_related("usuarios")
    tareas = tareas.filter(estado='Completada', fecha_creacion__year__range=[anyo_inicio, anyo_fin])
    
    return render(request, 'tarea/completadas.html', {'completadas':tareas})



#Vamos a mostrar el úlitmo usuario que comentó en una tarea de un proyecto especifico
def ultimo_usuario_comentar(request, id_proyecto):
    comentario = Comentario.objects.select_related("autor", "tarea")
    comentario = comentario.filter(tarea__proyecto=id_proyecto).order_by("-fecha_comentario")[:1].all()
    
    return render(request, 'comentarios/usuariocoment.html', {'comentario_mostrar':comentario})



#Mostramos los comentario de una tarea con la palabra que le digamos y de un año especifico
def comentarios_tareas(request, id_tarea, palabra, anyo):
    comentario = Comentario.objects.select_related("autor", "tarea")
    comentario = comentario.filter(tarea=id_tarea).filter(contenido__contains=palabra).filter(fecha_comentario__year=anyo)
    
    return render(request, 'comentarios/comentTarea.html', {'comentTarea_mostrar':comentario})



#Vamos a mostrar las etiquetas que se usan en todas las tareas de un proyecto
def etiquetas_tareas(request, id_proyecto):
    etiquetas = Etiqueta.objects.prefetch_related("tareas")
    etiquetas = etiquetas.filter(tareas__proyecto_id=id_proyecto)

    return render(request, 'etiqueta/etiquetasTarea.html', {'etiqueta_mostrar':etiquetas})



#Mostramos todos los usuarios que no están asignados a ninguna tarea
def usuarios_no_asignados(request):
    usuariosAsignados = AsignacionTarea.objects.select_related("usuario", "tarea")
    usuariosAsignados = usuariosAsignados.values_list('usuario', flat=True) #La consulta devuelve una lista plana de valores en lugar de una lista de tuplas.

    usuariosNoAsignados = Usuario.objects.exclude(id__in=usuariosAsignados)

    return render(request, 'usuarios/usuarioSinTarea.html', {'sinTarea_mostrar':usuariosNoAsignados})



#Ahora vamos a crear las 4 páginas de error
def error_404_view(request, exception=None):
    return render(request, 'errores/404.html', None, None, 404)

def error_403_view(request, exception=None):
    return render(request, 'errores/403.html', None, None, 403)

def error_400_view(request, exception=None):
    return render(request, 'errores/400.html', None, None, 400)

def error_500_view(request, exception=None):
    return render(request, 'errores/500.html', None, None,500)