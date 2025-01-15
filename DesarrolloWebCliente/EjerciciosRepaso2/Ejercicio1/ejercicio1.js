document.getElementById("boton").addEventListener("click", abrirVentana)

function abrirVentana(){
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidos = document.getElementById('apellidos').value.toUpperCase();
    var nombre_usuario = document.getElementById('nombre_usuario').value.toUpperCase();
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
        <p><strong>Nombre de usuario:</strong> ${nombre_usuario}</p>
        <p><strong>Contraseña:</strong> ${contraseña}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${dia} ${mes} ${año}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>Móvil:</strong> ${movil}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Ubicación:</strong> ${ubicacion}</p>
    `);
}


document.getElementById('dia').addEventListener('input', calcularEdad)
document.getElementById('mes').addEventListener('change', calcularEdad)
document.getElementById('año').addEventListener('input', calcularEdad)


function calcularEdad(){
    let dia = parseInt(document.getElementById('dia').value);
    let mes = document.getElementById('mes').selectedIndex;
    let año = parseInt(document.getElementById('año').value);

    if (!dia || !mes || !año) {
        document.getElementById('edad').value = "";
        return
    }

    let hoy = new Date();
    let edad = hoy.getFullYear() - año;

    if (hoy.getMonth +1 < mes || (hoy.getMonth() +1 == mes && hoy.getDate() < dia)) {
        edad--;
    }

    document.getElementById('edad').value = edad + " años";
}