/*Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en   
letras   mayúsculas.   El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   
ha   escrito   su   nombre   sólo   con   letras mayúsculas. Envíe el formulario a un programa de servidor si es correcto.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("nombreForm").reset();
    document.getElementById("nombre").addEventListener('input', comprobar)
    document.getElementById("img").addEventListener('click', enviar)
}

function comprobar(){
    let texto = document.getElementById('nombre').value
}