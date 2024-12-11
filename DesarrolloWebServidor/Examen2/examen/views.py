from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'principal.html')







########################################################################################################################################################################

#Ahora vamos a crear las 4 páginas de error
def error_404_view(request, exception=None):
    return render(request, 'errores/404.html', None, None, 404)

def error_403_view(request, exception=None):
    return render(request, 'errores/403.html', None, None, 403)

def error_400_view(request, exception=None):
    return render(request, 'errores/400.html', None, None, 400)

def error_500_view(request, exception=None):
    return render(request, 'errores/500.html', None, None,500)