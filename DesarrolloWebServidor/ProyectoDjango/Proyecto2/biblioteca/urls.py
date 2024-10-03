from django.urls import path
from . import views

urlpatterns = [
    path('', views.libro_list, name="libro_list"),
    path('autor/', views.autor_list, name="autor_list"),
    path('miembro/', views.miembro_list, name="miembro_list")
]