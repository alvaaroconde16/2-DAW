from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sopa/lista', views.listar_sopas, name='listar_sopas'),
    path('sopa/<int:id_sopa>/voto', views.ultimo_voto, name='ultimo_voto'),
    path('sopa/<str:usuario>', views.sopas_votos, name='sopas_votos'),
    path('usuario/', views.usuarios_voto, name='usuarios_voto'),
    path('cuenta/<str:nombre>', views.cuenta_usuario, name='cuenta_usuario'),
    path('votos/', views.votos_usuarios, name='votos_usuarios'),
    path('sopas/', views.sopas_media, name='sopas_media'),
]