from django.contrib import admin

# Register your models here.
from .models import Libro
from .models import Autor
from .models import Miembro

admin.site.register(Libro)
admin.site.register(Autor)
admin.site.register(Miembro)