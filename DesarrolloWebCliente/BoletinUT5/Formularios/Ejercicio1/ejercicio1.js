/* Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para mandar los datos a una nueva ventana. */

function mostrarDatos() {

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidos = document.getElementById('apellidos').value.toUpperCase();
    var usuario = document.getElementById('usuario').value.toUpperCase();
    var contraseña = document.getElementById('contraseña').value.toUpperCase();
    var dia = document.getElementById('dia').value.toUpperCase();
    var mes = document.getElementById('mes').value.toUpperCase();
    var año = document.getElementById('año').value.toUpperCase();
    var sexo = document.getElementById('sexo').value.toUpperCase();
    var movil = document.getElementById('movil').value.toUpperCase();
    var correo = document.getElementById('correo').value.toUpperCase();
    var ubicacion = document.getElementById('ubicacion').value.toUpperCase();

    document.getElementById("boton").addEventListener('click',crearNueva);

    var nuevaVentana;
    function crearNueva(){
        var nuevaVentana = window.open('', '', 'width=600,height=400');
        nuevaVentana.document.write(`
            <h2>Datos Registrados</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellidos:</strong> ${apellidos}</p>
            <p><strong>Nombre de usuario:</strong> ${usuario}</p>
            <p><strong>Contraseña:</strong> ${contraseña}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${dia} ${mes} ${año}</p>
            <p><strong>Sexo:</strong> ${sexo}</p>
            <p><strong>Móvil:</strong> ${movil}</p>
            <p><strong>Correo Electrónico:</strong> ${correo}</p>
            <p><strong>Ubicación:</strong> ${ubicacion}</p>
        `);
    }
    
    window.onload = mostrarDatos;
}