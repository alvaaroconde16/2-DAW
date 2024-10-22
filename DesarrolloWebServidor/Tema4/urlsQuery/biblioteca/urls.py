from django.urls import path,re_path
from .import views

urlpatterns = [
    path('',views.index,name='index'),
    path('libros/listar',views.listar_libros,name='listar_libros'),  #Con esto sacamos todos los libros
    path('libros/<int:id_libro>/', views.dame_libro, name="dame_libro"),  #Con esto vamos a sacar el libro con el id que le demos.
    path('libros/listar/<int:anyo_libro>/<int:mes_libro>', views.dame_libros_fecha, name="dame_libros_fecha"),  #Con esto sacamos libros con msmo año y mes.
    path('libros/listar/<str:idioma>/', views.dame_libros_idioma, name="dame_libros_idioma"),  #Con esto sacamos los libros que tengan el mismo idioma.
    path('biblioteca/<int:id_biblioteca>/libros/<str:texto_libro>', views.dame_libros_biblioteca, name="dame_libros_biblioteca"),  #Mostramos libros de una biblioteca
    path('ultimo-cliente-libro/<int:libro>', views.dame_ultimo_cliente_libro, name="ultimo_cliente_libro"),  #Sacar el ultimo cliente que ha tenido un libro
    re_path(r"^filtro[0-9]$", views.libros_no_prestados, name="libros_no_prestados"),  #Ver los libros que no han sido prestados. En prestamo no aparece el nombre
    path('biblioteca/<int:id_biblioteca>/', views.dame_biblioteca, name="dame_biblioteca"),  #Mostrar una Biblioteca y sus libros
    path('dame-libros-titulo,descripcion', views.dame_libros_titulo_en_descripcion, name="dame_libros_titulo_en_descripcion"),  #Muestra los libros que contienen el título del libro en la descripción
    path('dame-agrupaciones-puntos-clientes', views.dame_agrupaciones_puntos_cliente, name="dame_agrupaciones_puntos_cliente"),  #Una url que muestra la media, máximo y mínimo de puntos de todos los clientes de la Biblioteca
]