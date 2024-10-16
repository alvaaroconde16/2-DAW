//Ejercicio 3.- Crear dos enlaces, uno para abrir una nueva ventana y uno para cerrarla. La nueva ventana mostrará este mensaje 
//en una fuente grande : ​”El ojo es la ventana a tu alma “. La nueva ventana se coloca en la esquina izquierda de la pantalla , 
//será redimensionable , tendrá una barra de desplazamiento, y estará en primer plano.

function inicializar(){
    //Registramos los eventos con sus funciones.
    //Cuando se haga click en los botones, se ejecutarán las funciones registradas
    document.getElementById("crear-ventana").addEventListener('click',crearNueva);
    document.getElementById("cerrar-ventana").addEventListener('click',cerrarNueva);
}

let nuevaVentana;
function crearNueva(){

    nuevaVentana = window.open("", "_blank", "height=400, width=800, top=0, left=0, resizable=yes, scrollbars=yes");
    nuevaVentana.document.write('<p> El ojo es la ventana a tu alma </p>')

    //Ponemos la ventana en primer plano
    nuevaVentana.focus();
}

function cerrarNueva(){
    if (nuevaVentana){
        nuevaVentana.close(); nuevaVentana = null;
    }
}