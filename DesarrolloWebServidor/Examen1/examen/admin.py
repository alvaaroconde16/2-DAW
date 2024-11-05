from django.contrib import admin

# Register your models here.
from .models import Sopa
from .models import Usuario
from .models import Votacion
from .models import Cuenta

admin.site.register(Sopa)
admin.site.register(Usuario)
admin.site.register(Votacion)
admin.site.register(Cuenta)