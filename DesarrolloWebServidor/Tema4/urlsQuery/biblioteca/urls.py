from django.urls import path,re_path
from .import views

urlpatterns = [
    path('',views.index,name='index'),
    path('libros/listar',views.listar_libros,name='lista_libros'),  #Con esto sacamos todos los libros
    path('libros/<int:id_libro>/', views.dame_libro, name="dame_libro"),  #Con esto vamos a sacar el libro con el id que le demos.
    path('libros/listar/<int:anyo_libro>/<int:mes_libro>', views.dame_libros_fecha, name="dame_libros_fecha"),  #Con esto sacamos libros con msmo año y mes.
    path('libros/listar/<str:idioma>/', views.dame_libros_idioma, name="dame_libros_idioma"),  #Con esto sacamos los libros que tengan el mismo idioma.
    path('biblioteca/<int:id_biblioteca>/libros/<str:texto_libro>', views.dame_libros_biblioteca, name="dame_libros_biblioteca"),  #Mostramos libros de una biblioteca
]