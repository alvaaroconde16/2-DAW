from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('proyectos/listar', views.listar_proyectos, name='listar_proyectos'),
    path('proyectos/<int:id_proyecto>', views.listar_tareas, name='listar_tareas'),
    path('tarea/<int:id_tarea>/usuarios', views.listar_usuarios_tarea, name='listar_usuarios_tarea'),
    path('proyectos/<int:id_proyecto>/tarea/<str:observacion>', views.tareas_con_observaciones, name='tareas_con_observaciones'),
    path('tarea/completadas/<int:anyo_inicio>/<int:anyo_fin>', views.tareas_completadas, name='tareas_completadas'),
    path('ultimo-usuario-comentar/<int:id_proyecto>', views.ultimo_usuario_comentar, name='ultimo_usuario_comentar'),
    path('comentarios/tarea/<int:id_tarea>/<str:palabra>/<int:anyo>', views.comentarios_tareas, name='comentarios_tareas'),
    path('proyecto/<int:id_proyecto>/etiquetas', views.etiquetas_tareas, name='etiquetas_tareas'),
    path('usuarios-sin-tareas', views.usuarios_no_asignados, name='usuarios_no_asignados'),
]