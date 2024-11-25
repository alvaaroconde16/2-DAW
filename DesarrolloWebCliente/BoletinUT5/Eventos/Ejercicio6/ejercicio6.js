/*Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en   
letras   mayúsculas.   El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   
ha   escrito   su   nombre   sólo   con   letras mayúsculas. Envíe el formulario a un programa de servidor si es correcto.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("img").addEventListener('click', enviar)
}

function enviar(event){
    event.preventDefault();

    let texto = document.getElementById('nombre').value
    let mensaje = document.getElementById('mensajeError')
    let textoMayusculas = texto.toUpperCase();

    if (texto == "") {
        mensaje.textContent = "EL CAMPO ESTÁ VACÍO"
    } else if (texto == textoMayusculas) {
        window.location.href = "mailto:alvaro16072004@gmail.com?subject=Este es el asunto";
        mensaje.textContent = ""
    } else {
        mensaje.textContent = "EL NOMBRE NO ESTÁ EN MAYÚSCULAS"
    }
}