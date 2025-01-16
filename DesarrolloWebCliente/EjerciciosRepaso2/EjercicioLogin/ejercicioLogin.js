document.addEventListener('DOMContentLoaded', functionDom);

function functionDom() {
    var correo = document.getElementById('correo');
    var departamento = document.getElementById('departamento');
    var texto = document.getElementById('oculto');
    var boton = document.getElementById('boton');
    var regexCorreo = /^[a-zA-Z0-9._+-]+@dwc.com$/;

    //Rellenar los campos con cookies si existen
    var savedCorreo = getCookie('correo');
    var savedDepartamento = getCookie('departamento');

    /*var savedCorreo = localStorage.getItem('correo');
    var savedDepartamento = localStorage.getItem('departamento');*/

    if (savedCorreo) {
        correo.value = savedCorreo;
    }

    if (savedDepartamento) {
        departamento.value = savedDepartamento;
    }

    boton.addEventListener('click', () => {

        let correo = document.getElementById('correo').value;
        let departamento = document.getElementById('departamento').value;

        // Validación del correo corporativo
        if (!regexCorreo.test(correo)) {
            texto.textContent = 'Correo no válido, por favor introduce un correo de la empresa DWC.';
        } else {
            alert('Correo válido. Datos enviados correctamente.');

            // Guardar cookies
            setCookie('correo', correo, 365);
            setCookie('departamento', departamento, 365);


            // Guardar en localStorage
            /*localStorage.setItem('correo', correo);
            localStorage.setItem('departamento', departamento);*/

            // Simular envío del formulario
            document.getElementById('formulario').submit();
        }
    });
}

// Función para crear una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener una cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}