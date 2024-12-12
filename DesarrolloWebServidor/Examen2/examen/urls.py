from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('usuarios/listar', views.listar_usuarios, name='listar_usuarios'),
    path('productos/listar', views.listar_productos, name='listar_productos'),
    path('promociones/listar', views.listar_promociones, name='listar_promociones'),
    
    path('usuarios/crear/', views.usuario_create, name='usuario_create'),
    path('productos/crear/', views.producto_create, name='producto_create'),
    path('promociones/crear/', views.promocion_create, name='promocion_create'),
    
    path('promociones/busqueda-avanzada/', views.promocion_busqueda, name='promocion_busqueda'),
    
    path('promociones/actualizar/<int:promocion_id>', views.actualizar_promocion, name='actualizar_promocion'),
    
    path('promociones/eliminar/<int:promocion_id>', views.eliminar_promocion, name='eliminar_promocion'),
]