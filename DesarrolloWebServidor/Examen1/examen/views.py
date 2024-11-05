from django.shortcuts import render
from .models import Usuario, Sopa, Cuenta, Votacion
from django.db.models import Q, Sum, Avg

# Create your views here.
def index(request):
    return render(request, 'index.html')


#Listo todas las sopas que hay.
def listar_sopas(request):
    sopa = Sopa.objects.all()
    
    return render(request, 'sopas/lista.html', {'sopas_mostrar':sopa})



#El último voto que se realizó en un modelo principal en concreto, y mostrar el comentario, la votación e información del usuario o cliente que lo realizó
def ultimo_voto(request, id_sopa):
    voto = Votacion.objects.select_related('sopa', 'usuario').filter(sopa_id=id_sopa).order_by("-fecha_votacion")[:1].all()
    
    return render(request, 'votos/ultimoVoto.html', {'voto_mostrar':voto})



#Mostramos los modelos que tienen una votación menor que 3 y que son realizados por un usuario en concreto
def sopas_votos(request, usuario):
    voto = Votacion.objects.select_related('sopa', 'usuario').filter(Q(puntuacion=1) | Q(puntuacion=2), usuario__nombre=usuario)
    
    return render(request, 'sopas/sopasVotos.html', {'sopasVotos_mostrar':voto})



#Mostramos todos los usuarios que nunca han realizado una puntuacion
def usuarios_voto(request):
    usuario = Usuario.objects.all().filter(votacion=None)
    
    return render(request, 'usuarios/usuariosSinVoto.html', {'usuarios_mostrar':usuario})



#Mostramos las cuentas que sean de la Caixa o UNICAJA y que el propietario tenga un nombre que contenga "Juan"
def cuenta_usuario(request, nombre):
    cuenta = Cuenta.objects.select_related('usuario').filter(Q(banco='caixa') | Q(banco='unicaja'), usuario__nombre__contains = nombre)
    
    return render(request, 'cuenta/cuenta.html', {'cuentas_mostrar':cuenta})



#Obtenemos los votos de los usuarios que han votado a partir de 2023 con una puntuación igual a 5 y que tengan asociada cuenta bancaria.
def votos_usuarios(request):
    voto = Votacion.objects.select_related('sopa', 'usuario').filter(puntuacion=5, usuario__cuenta=True)
    
    return render(request, 'votos/votos.html', {'votosfecha_mostrar':voto})



def sopas_media(request):
    resultado = Votacion.objects.aggregate(Avg("puntuacion"))
    voto = Votacion.objects.all().filter(resultado>=2.5)
    
    return render(request, 'sopas/sopaMedia.html', {'sopamedia_mostrar':voto})