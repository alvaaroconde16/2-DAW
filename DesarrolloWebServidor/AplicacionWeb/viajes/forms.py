from django import forms
from .models import Usuario

class UsuarioForm(forms.ModelForm):
    
    class Meta:
        model = Usuario
        fields = ['nombre', 'correo', 'telefono', 'edad', 'contraseña', 'fecha_registro']
        widgets = {
            "fecha_registro":forms.SelectDateWidget()
        }
        
        
    # Validación del correo
    def clean_correo(self):
        correo = self.cleaned_data.get('correo')
        if "@" not in correo or "." not in correo:
            raise forms.ValidationError("Por favor, introduce un correo válido.")
        return correo

    # Validación del teléfono
    def clean_telefono(self):
        telefono = self.cleaned_data.get('telefono')
        if not telefono.isdigit():
            raise forms.ValidationError("El teléfono debe contener solo números.")
        return telefono

    # Validación de edad (debe ser mayor a 18)
    def clean_edad(self):
        edad = self.cleaned_data.get('edad')
        if edad < 18:
            raise forms.ValidationError("La edad mínima es 18 años.")
        return edad
