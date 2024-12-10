from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('usuarios/listar', views.listar_usuarios, name='listar_usuarios'),
    path('usuarios/reservas', views.listar_reservas, name='listar_reservas'),
    path('usuarios/<int:id_usuario>/reservas', views.listar_reservasUsuario, name='listar_reservasUsuario'),
    path('reservas/<str:fecha_inicio>/<str:fecha_fin>', views.reservas_rango, name='reservas_rango'),
    re_path(r'^reservas/sin_extras/[a-zA-Z0-9]*$', views.reservas_sin_extras, name='reservas_sin_extras'),
    path('destinos/listar', views.listar_destinos, name='listar_destinos'),
    path('alojamientos/listar', views.listar_alojamientos, name='listar_alojamientos'),
    path('destinos/<int:id_destino>/alojamientos', views.alojamientos_destino, name='alojamientos_destino'),
    path('usuarios/pasaporte/<str:nacionalidad>', views.pasaporte_nacionalidad, name='pasaporte_nacionalidad'),
    path('usuarios/ultimo_comentario/', views.ultimo_usuario_comentar, name='ultimo_usuario_comentar'),
    path('usuarios/<int:id_usuario>/comentarios', views.comentarios_usuario, name='comentarios_usuario'),
    path('reservas/total_precios', views.total_precios_reservas, name='total_precios_reservas'),
    
    path('usuarios/crear/', views.usuario_create, name='usuario_create'),
    path('destinos/crear/', views.destino_create, name='destino_create'),
    path('reservas/crear/', views.reserva_create, name='reserva_create'),
    path('alojamientos/crear/', views.alojamiento_create, name='alojamiento_create'),
    
    path('usuarios/busqueda-avanzada/', views.usuario_busqueda, name='usuario_busqueda'),
    path('reservas/busqueda-avanzada/', views.reserva_busqueda, name='reserva_busqueda'),
    path('destinos/busqueda-avanzada/', views.destino_busqueda, name='destino_busqueda'),
    path('alojamientos/busqueda-avanzada/', views.alojamiento_busqueda, name='alojamiento_busqueda'),
    
    path('usuarios/actualizar/<int:usuario_id>', views.actualizar_usuario, name='actualizar_usuario'),
]