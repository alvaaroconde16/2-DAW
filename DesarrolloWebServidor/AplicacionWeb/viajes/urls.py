from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('usuarios/listar', views.listar_usuarios, name='listar_usuarios'),
    path('usuarios/<int:id_usuario>/reservas', views.listar_reservas, name='listar_reservas'),
    path('reservas/<str:fecha_inicio>/<str:fecha_fin>', views.reservas_rango, name='reservas_rango'),
    re_path(r'^reservas/sin_extras/[a-zA-Z0-9]*$', views.reservas_sin_extras, name='reservas_sin_extras'),
    path('alojamientos/', views.reservas_rango, name='reservas_rango'),
    path('destinos/listar', views.listar_destinos, name='listar_destinos'),
    path('usuarios/pasaporte/<str:nacionalidad>', views.pasaporte_nacionalidad, name='pasaporte_nacionalidad'),
    path('usuarios/ultimo_comentario/', views.ultimo_usuario_comentar, name='ultimo_usuario_comentar'),
]