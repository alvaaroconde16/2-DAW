from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('proyectos/listar', views.listar_proyectos, name='listar_proyectos'),
    path('proyectos/<int:id_proyecto>', views.listar_tareas, name='listar_tareas'),
    path('tarea/<int:id_tarea>/usuarios', views.listar_usuarios_tarea, name='listar_usuarios_tarea'),
    path('tarea/observaciones/<str:observacion>', views.tareas_con_observaciones, name='tareas_con_observaciones'),
]