from django.contrib import admin

# Register your models here.
from .models import Biblioteca
from .models import Autor
from .models import Libro
from .models import Cliente
from .models import DatosClientes


admin.site.register(Biblioteca)
admin.site.register(Autor)
admin.site.register(Libro)
admin.site.register(Cliente)
admin.site.register(DatosClientes)