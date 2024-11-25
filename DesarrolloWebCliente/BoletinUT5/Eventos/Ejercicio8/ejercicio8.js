/*Usar JS para validar el formulario de la figura y evitar el envío hasta que esté correcto.*/

/* Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para mandar los datos a una nueva ventana. */

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("dia").addEventListener("input", calcularEdad)  //Usamos input para que se calcula en tiempo real a la vez que introducimos los datos
    document.getElementById("mes").addEventListener("change", calcularEdad)  //Usamos change porque el mes es un desplegable y el usuario debe elegir una opción
    document.getElementById("año").addEventListener("input", calcularEdad)
    document.getElementById("boton").addEventListener('click', abrirVentana)
}


function calcularEdad(){
    //Parseamos el día y el año que nos pasa el usuario, y el mes lo elegimos con el index al ser un desplegable
    let dia = parseInt(document.getElementById('dia').value);  
    let mes = document.getElementById('mes').selectedIndex;
    let año = parseInt(document.getElementById('año').value);

    //Comprobamos si hay algún campo vacío
    if (!dia || !mes ||!año) {
        document.getElementById('edad').value = "";
        return;
    }

    //Creamos una fecha de hoy y calculamos la edad
    let hoy = new Date();
    let edad = hoy.getFullYear() - año;


    //Comprobamos si el cumpleaños no ha ocurrido aún
    if (hoy.getMonth() +1 < mes || (hoy.getMonth() +1 == mes && hoy.getDate() < dia) ) {
        edad--;
    }

    //Asignamos el valor de edad al atributo
    document.getElementById("edad").value = edad + " años"
}



//Creamos el evento al hacer click en el boton
function abrirVentana(){

    // Obtener los valores del formulario y los convertimos a mayúsculas
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidos = document.getElementById('apellidos').value.toUpperCase();
    var usuario = document.getElementById('usuario').value.toUpperCase();
    var contraseña = document.getElementById('contraseña').value.toUpperCase();
    var dia = document.getElementById('dia').value.toUpperCase();
    var mes = document.getElementById('mes').value.toUpperCase();
    var año = document.getElementById('año').value.toUpperCase();
    var edad = document.getElementById('edad').value.toUpperCase();
    var sexo = document.getElementById('sexo').value.toUpperCase();
    var movil = document.getElementById('movil').value.toUpperCase();
    var correo = document.getElementById('correo').value.toUpperCase();
    var ubicacion = document.getElementById('ubicacion').value.toUpperCase();

    //Abrimos la nueva ventana
    var nuevaVentana = window.open('', '', 'width=800,height=400');

    //Escribimos todos los datos en la nueva ventana
    nuevaVentana.document.write(`
        <h2>Datos Registrados</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Nombre de usuario:</strong> ${usuario}</p>
        <p><strong>Contraseña:</strong> ${contraseña}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${dia} ${mes} ${año}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>Móvil:</strong> ${movil}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Ubicación:</strong> ${ubicacion}</p>
    `);
}