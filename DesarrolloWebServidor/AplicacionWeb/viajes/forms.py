from django import forms
from .models import Usuario, Destino, Reserva, Comentario, Alojamiento
from datetime import date, datetime
from django.utils import timezone

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
        destinoNombre = Usuario.objects.filter(nombre=nombre).first()
        if(not destinoNombre is None
           ):
             if(not self.instance is None and destinoNombre.id == self.instance.id):
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
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data
            
            
########################################################################################################################################################################

class DestinoForm(forms.ModelForm):
    
    class Meta:
        model = Destino
        fields = ['nombre', 'pais', 'descripcion', 'popularidad']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
            "descripcion": "La descripción no debe exceder los 500 caracteres",
            "popularidad": "Valor entre 0 y 5",
        }
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        nombre = self.cleaned_data.get('nombre')
        pais = self.cleaned_data.get('pais')
        descripcion = self.cleaned_data.get('descripcion')
        popularidad = self.cleaned_data.get('popularidad')

        
        #Comprobamos que no exista un destino con ese nombre
        destinoNombre = Destino.objects.filter(nombre=nombre).first()
        if(not destinoNombre is None
           ):
             if(not self.instance is None and destinoNombre.id == self.instance.id):
                 pass
             else:
                self.add_error('nombre','Ya existe un destino con ese nombre')
                
                
        # Validación de país: Verificamos que el campo no esté vacío y sea un país válido
        if not pais:
            self.add_error('pais', 'El país no puede estar vacío.')
        
                
        # Validación de descripción: Verificamos que la descripción no esté vacía y no exceda los 500 caracteres
        if not descripcion:
            self.add_error('descripcion', 'La descripción no puede estar vacía.')
        elif len(descripcion) > 500:
            self.add_error('descripcion', 'La descripción no debe exceder los 500 caracteres.')
        
        
        # Validación de popularidad: Verificamos que esté entre 0 y 5
        if not (0 <= popularidad <= 5):
            self.add_error('popularidad', 'La popularidad debe estar entre 0 y 5.')
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data
            
    
########################################################################################################################################################################

class ReservaForm(forms.ModelForm):
    
    class Meta:
        model = Reserva
        fields = ['codigo_reserva', 'fecha_salida', 'fecha_llegada', 'numero_personas', 'precio', 'usuario']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
            "fecha_salida": ("La fecha de salida debe ser igual o mayor a hoy"),
            "numero_personas": ("El número de personas debe ser 1 como mínimo"),
            "precio": ("El precio debe ser un valor positivo"),
            "autores":("Mantén pulsada la tecla control para seleccionar varios elementos")
        }
        widgets = {
            "fecha_salida":forms.DateInput(format="%Y-%m-%d", attrs={"type": "date"}),
            "fecha_llegada":forms.DateInput(format="%Y-%m-%d", attrs={"type": "date"}),
        }
        
    # Usamos un ModelChoiceField para seleccionar un solo usuario
    usuario = forms.ModelChoiceField(queryset=Usuario.objects.all(), required=True, label="Selecciona un usuario")
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        codigo_reserva = self.cleaned_data.get('codigo_reserva')
        fecha_salida = self.cleaned_data.get('fecha_salida')
        fecha_llegada = self.cleaned_data.get('fecha_llegada')
        numero_personas = self.cleaned_data.get('numero_personas')
        precio = self.cleaned_data.get('precio')
        usuario = self.cleaned_data.get('usuario')
        
        
        #Comprobamos que no exista una reserva con ese código
        codigoReserva = Reserva.objects.filter(codigo_reserva=codigo_reserva).first()
        if(not codigoReserva is None
           ):
             if(not self.instance is None and codigoReserva.id == self.instance.id):
                 pass
             else:
                self.add_error('codigo_reserva','Ya existe una reserva con ese código de reserva')
                
        
        fechaHoy = timezone.now()
        # Validación de fecha_salida: Verificamos que la fecha de salida no sea anterior a hoy
        if fecha_salida < fechaHoy:
            self.add_error('fecha_salida', 'La fecha de salida no puede ser anterior a hoy')
            
        
        # Validación de fecha_llegada: Verificamos que la fecha de llegada no sea anterior a la fecha de salida
        if fecha_llegada < fecha_salida:
            self.add_error('fecha_llegada', 'La fecha de llegada no puede ser anterior a la fecha de salida')
        
                
        # Validación de numero_personas: Verificamos que el número de personas sea al menos 1
        if numero_personas < 1:
            self.add_error('numero_personas', 'El número de personas debe ser al menos 1')

        # Validación de precio: Verificamos que el precio sea mayor que 0
        if precio <= 0:
            self.add_error('precio', 'El precio debe ser un valor positivo')
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data