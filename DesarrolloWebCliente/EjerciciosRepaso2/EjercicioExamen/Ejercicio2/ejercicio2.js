document.addEventListener('DOMContentLoaded', functionDom)

function functionDom() {
    var codigo = document.getElementById('codigo');
    var formulario = document.getElementById('formulario');
    var oculto = document.getElementById('oculto');
    var boton = document.getElementById('boton');

    var regexCodigo = /^[a-zA-Z]{3}-\d{1,5}$/;

    var savedCodigo = localStorage.getItem('codigo');

    if (savedCodigo) {
        codigo.value = savedCodigo;
    }

    codigo.addEventListener('blur', function (){
        var codigo = document.getElementById('codigo').value;

        if (!regexCodigo.test(codigo)) {
            oculto.textContent = 'El código no es válido. Por favor, introduce un código válido.';
            boton.disabled = true;
        } else {
            oculto.textContent = '';
            boton.disabled = false;
        }
    })
    
    boton.addEventListener('click', () => {
        let codigo = document.getElementById('codigo').value;

        alert('Código válido. Datos enviados correctamente.');

        localStorage.setItem('codigo', codigo);

        formulario.submit();
    });
}