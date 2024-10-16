//Ejercicio 2.- Escribir un script que mostrará el nombre del navegador , la versión y el sistema operativo que esté utilizando. 
//Prueba tu programa en distintos navegadores, el objeto Navigator no está estandarizado.

let ventana;
function abrirVentana(){
    ventana = window.open("", "_blank", "height=400, width=800")
    
    ventana.document.write("Navegador: " + window.navigator.userAgent + "<br>" + "Version: " + window.navigator.appVersion + "<br>" + 
        "Sistema Operativo: " + window.navigator.platform + "<br>")
}

abrirVentana()