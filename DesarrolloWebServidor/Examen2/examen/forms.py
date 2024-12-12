from django import forms
from .models import Usuario, Producto, Promocion
from datetime import date, datetime
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

class UsuarioForm(forms.ModelForm):
    
    class Meta:
        model = Usuario
        fields = ['nombre', 'edad']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
        }
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        nombre = self.cleaned_data.get('nombre')
        edad = self.cleaned_data.get('edad')

        
        #Comprobamos que no exista un usuario con ese nombre
        usuarioNombre = Usuario.objects.filter(nombre=nombre).first()
        if(not usuarioNombre is None
           ):
             if(not self.instance is None and usuarioNombre.id == self.instance.id):
                 pass
             else:
                self.add_error('nombre','Ya existe un usuario con ese nombre')


        # Comprobamos la edad (debe ser mayor a 18)
        if edad < 0:
            raise forms.ValidationError('edad','Introduce una edad válida porfavor.')
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data
    
    

class ProductoForm(forms.ModelForm):
    
    class Meta:
        model = Producto
        fields = ['nombre', 'puede_tener_promociones']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
        }
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        nombre = self.cleaned_data.get('nombre')
        puede_tener_promociones = self.cleaned_data.get('puede_tener_promociones')

        
        #Comprobamos que no exista un usuario con ese nombre
        productoNombre = Usuario.objects.filter(nombre=nombre).first()
        if(not productoNombre is None
           ):
             if(not self.instance is None and productoNombre.id == self.instance.id):
                 pass
             else:
                self.add_error('nombre','Ya existe un usuario con ese nombre')


        # Comprobamos la edad (debe ser mayor a 18)
        if puede_tener_promociones is None:
            raise forms.ValidationError('puede_tener_promociones','Introduce un valor porfavor.')
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data
    
    
    
class PromocionForm(forms.ModelForm):
    
    class Meta:
        model = Promocion
        fields = ['nombre', 'descripcion', 'descuento', 'fecha_inicio', 'fecha_fin', 'activa', 'producto', 'usuario']
        help_texts = {
            "nombre": ("200 caracteres como máximo"),
            "descripcion": ("La descripción debe tener al menos 100 caracteres"),
            "usuario": ("Pulsandn la tecla 'Cntrl' puede elegir mas de un usuario"),
        }
        widgets = {
            "fecha_inicio":forms.DateInput(format="%Y-%m-%d", attrs={"type": "date"}),
            "fecha_fin":forms.DateInput(format="%Y-%m-%d", attrs={"type": "date"}),
        }
        
    
    def clean(self):
        #Validamos con el modelo actual
        super().clean()
        
        #Obtenemos los campos 
        nombre = self.cleaned_data.get('nombre')
        descripcion = self.cleaned_data.get('descripcion')
        descuento = self.cleaned_data.get('descuento')
        fecha_inicio = self.cleaned_data.get('fecha_inicio')
        fecha_fin = self.cleaned_data.get('fecha_fin')
        activa = self.cleaned_data.get('activa')
        producto = self.cleaned_data.get('producto')
        usuario = self.cleaned_data.get('usuario')

        
        #Comprobamos que no exista un usuario con ese nombre
        promocionNombre = Usuario.objects.filter(nombre=nombre).first()
        if(not promocionNombre is None
           ):
             if(not self.instance is None and promocionNombre.id == self.instance.id):
                 pass
             else:
                self.add_error('nombre','Ya existe un usuario con ese nombre')


        # Validación de descripción: Verificamos que la descripción no esté vacía y no exceda los 500 caracteres
        if not descripcion:
            self.add_error('descripcion', 'La descripcion no puede estar vacía.')
        elif len(descripcion) < 100:
            self.add_error('descripcion', 'La descripcion debe tener al menos 100 caracteres.')


        # Validación: Comprobamos que se haya aplicado un descuento
        if not (0 <= descuento <= 10):
            self.add_error('descuento', 'El descuento debe estar entre 0 y 5.')
            
        
        fechaHoy = date.today()
        # Validación de fecha_salida: Verificamos que la fecha de salida no sea anterior a hoy
        if fecha_inicio > fecha_fin:
            self.add_error('fecha_inicio', 'La fecha de inicio debe de ser menor a la fecha de fin')
            
        
        # Validación de fecha_llegada: Verificamos que la fecha de llegada no sea anterior a la fecha de salida
        if fecha_fin < fechaHoy:
            self.add_error('fecha_fin', 'La fecha de fin no puede ser menor a la fecha de hoy')
            

        # Validación: Comprobamos que el producto permita las promociones
        #if producto.puede_tener_promociones is False:
        #    self.add_error('producto', 'El producto debe permitir las promociones.')
         
        if not producto:
            raise forms.ValidationError('producto','Debe seleccionar un producto') 
            
        
        # Comprobamos la edad (debe ser mayor a 18)
        #if usuario.edad < 18:
        #   raise forms.ValidationError('usuario','El usuario debe tener al menos 18 años.')
        
        if not usuario:
            raise forms.ValidationError('usuario','Debe elegir un usuario')
            
            
        #Siempre devolvemos el conjunto de datos.
        return self.cleaned_data
    
    
########################################################################################################################################################################
    
    
class BusquedaPromocionForm(forms.Form):
    
    textoBusqueda = forms.CharField(required=False)
    descuento = forms.IntegerField(required=False, label='Descuento')
    fecha_inicio = forms.DateField(label='fecha inicio', required=False)
    fecha_fin = forms.DateField(label='fecha_fin', required=False)
    activa = forms.BooleanField()
    usuarios = forms.MultipleChoiceField(required=False, widget=forms.CheckboxSelectMultiple())
    
    

    def clean(self):
        # Llamamos al método clean de la clase base para validar el formulario
        cleaned_data = super().clean()

        # Obtenemos los valores de los campos
        textoBusqueda = cleaned_data.get('textoBusqueda')
        descuento = cleaned_data.get('descuento')
        fecha_inicio = cleaned_data.get('fecha_inicio')
        fecha_fin = cleaned_data.get('fecha_fin')
        activa = cleaned_data.get('activa')
        usuarios = cleaned_data.get('usuarios')


        # Verificamos que al menos un campo tenga un valor
        if (not textoBusqueda == ""
            and not descuento 
            and not activa
            and fecha_fin is None
            and fecha_inicio is None
            and not usuarios):
            
            self.add_error('nombre', 'Debe introducir al menos un valor en un campo del formulario')
            self.add_error('descuento', 'Debe introducir al menos un valor en un campo del formulario')
            self.add_error('activa', 'Debe introducir al menos un valor en un campo del formulario')
            self.add_error('fecha_fin', 'Debe introducir al menos un valor en un campo del formulario')
            self.add_error('fecha_inicio', 'Debe introducir al menos un valor en un campo del formulario')
            self.add_error('usuarios', 'Debe introducir al menos un valor en un campo del formulario')


        else:
            # Si el nombre se ha introducido, debe tener al menos 3 caracteres
            if textoBusqueda and len(textoBusqueda) < 3:
                self.add_error('textoBusqueda', 'El texto de busqueda debe tener al menos 3 caracteres')

        return cleaned_data