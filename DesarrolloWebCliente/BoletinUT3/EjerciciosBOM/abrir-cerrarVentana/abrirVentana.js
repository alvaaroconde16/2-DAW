//En una nueva ventana, imprimir todas las propiedades del objeto navigator.
function inicializar(){
    //Registramos los eventos con sus funciones.
    //Cuando se haga click en los botones, se ejecutarán las funciones registradas
    document.getElementById("crear-ventana").addEventListener('click',crearNueva);
    document.getElementById("cerrar-ventana").addEventListener('click',cerrarNueva);
}
var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("","_blank","height=400,width=800");
}
function cerrarNueva(){
    if (nuevaVentana){
        nuevaVentana.close(); nuevaVentana = null;
    }
}