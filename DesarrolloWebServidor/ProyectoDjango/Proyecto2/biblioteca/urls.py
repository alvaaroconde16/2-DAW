from django.urls import path
from . import views

urlpatterns = [
    path('', views.libro_list, name="index_list"),
    path("libros/listar", views.listar_libros, name=""),
    path('autor/', views.autor_list, name="autor_list"),
    path('miembro/', views.miembro_list, name="miembro_list")
]