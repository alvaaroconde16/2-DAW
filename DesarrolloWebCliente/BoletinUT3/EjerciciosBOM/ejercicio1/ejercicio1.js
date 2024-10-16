//Ejercicio 1.- En una nueva ventana, imprimir todas las propiedades del objeto navigator.

let ventana;
function abrirVentana(){
    ventana = window.open("", "_blank", "height=400, width=800");
    for (propiedad in window.navigator) {
        ventana.document.write(propiedad + ": " + window.navigator[propiedad] + "<br>")
    }
}
abrirVentana();