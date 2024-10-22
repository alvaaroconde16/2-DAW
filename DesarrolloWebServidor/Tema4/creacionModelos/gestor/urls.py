from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('proyectos/listar', views.listar_proyectos, name='listar_proyectos'),
    path('proyectos/<int:id_proyecto>', views.listar_tareas, name='listar_tareas'), 
]