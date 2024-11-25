/*Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. Utilice   el   atributo   id   
para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("botForm").reset();
    document.getElementById("rojo").addEventListener('click', enviar)
    document.getElementById("verde").addEventListener('click', enviar)
    document.getElementById("azul").addEventListener('click', enviar)
}

function enviar(){
    let formulario = document.getElementById('botForm') 

    if (document.getElementById('rojo').checked) {
        formulario.style.backgroundColor = 'red';
    } else if (document.getElementById('verde').checked) {
        formulario.style.backgroundColor = 'green';
    } else {
        formulario.style.backgroundColor = 'blue';
    }
}