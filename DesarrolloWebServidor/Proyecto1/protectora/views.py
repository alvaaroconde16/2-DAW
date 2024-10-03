from django.shortcuts import render
from .models import Animal
from .models import Protectora
from .models import Colaborador

# Create your views here.
#Esta es la vista para el modelo de animal
def animal_list(request):
    animals = Animal.objects.all()
    return render(request, 'protectora/animal_list.html', {"animal_mostrar":animals})

#Esta es la vista para el modelo de protectora
def protectora_list(request):
    protectoras = Protectora.objects.all()
    return render(request, 'protectora/protectora_list.html', {"protectora_mostrar":protectoras})

#Esta es la vista para el modelo de colaborador
def colaborador_list(request):
    colaboradors = Colaborador.objects.all()
    return render(request, 'protectora/colaborador_list.html', {"colaborador_mostrar":colaboradors})