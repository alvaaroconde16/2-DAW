document.getElementById('boton').addEventListener('click', mayusculas)

function mayusculas(){
    let nombre = document.getElementById('nombre').value;
    let nombreMay = nombre.toUpperCase();

    if (nombre == nombreMay) {
        document.getElementById('oculto').textContent = "";
        alert("Enhorabuena")
    } else {
        document.getElementById('oculto').textContent = "El nombre debe de estar en mayúsculas";
    }
}