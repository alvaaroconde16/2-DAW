from django import forms
from .models import Usuario
from datetime import date

class UsuarioForm(forms.ModelForm):
    
    class Meta:
        model = Usuario
        fields = ['nombre', 'correo', 'telefono', 'edad', 'contraseña', 'fecha_registro']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
        }
        widgets = {
            "fecha_registro":forms.DateInput(format="%Y-%m-%d", attrs={"type": "date"}),
        }
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        nombre = self.cleaned_data.get('nombre')
        correo = self.cleaned_data.get('correo')
        telefono = self.cleaned_data.get('telefono')
        edad = self.cleaned_data.get('edad')
        contraseña = self.cleaned_data.get('contraseña')
        fecha_registro = self.cleaned_data.get('fecha_registro')

        
        #Comprobamos que no exista un usuario con ese nombre
        usuarioNombre = Usuario.objects.filter(nombre=nombre).first()
        if(not usuarioNombre is None
           ):
             if(not self.instance is None and usuarioNombre.id == self.instance.id):
                 pass
             else:
                self.add_error('nombre','Ya existe un usuario con ese nombre')
        
        
        #Comprobamos que el formato del correo es válido
        if "@" not in correo or "." not in correo:
            raise forms.ValidationError('correo', 'Por favor, introduce un correo válido.')
    
    
        #Comprobamos que el telefono solo contenga números
        if not telefono.isdigit():
            raise forms.ValidationError('telefono', 'El teléfono debe contener solo números.')


        # Comprobamos la edad (debe ser mayor a 18)
        if edad < 18:
            raise forms.ValidationError('edad','La edad mínima es 18 años.')
        
        
        #Comprobamos que la contraseña tenga al menos 8 caracteres
        if len(contraseña) < 8:
            self.add_error('contraseña','Al menos debes indicar 10 caracteres')
            
            
        #Comprobamos que la fecha de publicación sea mayor que hoy
        fechaHoy = date.today()
        if fechaHoy > fecha_registro :
            self.add_error('fecha_registro','La fecha de registro debe ser igual o mayor a Hoy')