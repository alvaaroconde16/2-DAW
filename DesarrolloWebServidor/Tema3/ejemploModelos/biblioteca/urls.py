from django.urls import path
from . import views

urlpatterns = [
    path('', views.usuario_list, name="usuario_list"),
    path('tarea/', views.tarea_list, name="tarea_list"),
    path('proyecto/', views.proyecto_list, name="proyecto_list"),
    path('etiqueta/', views.etiqueta_list, name="etiqueta_list"),
    path('asignaciontarea/', views.asignaciontarea_list, name="asignaciontarea_list"),
    path('comentario/', views.comentario_list, name="comentario_list"),
]