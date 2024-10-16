//Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. 
//Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.

let email = prompt("Introduce una direccion de email (ejemplo123@gmail.com): ")

let estandar = /^[a-z\.0-9]+@[a-z]+\.[a-z]{2,3}/g
let resultado = email.match(estandar)

while (!resultado) {
    alert("El correo introducido es incorrecto")    
    email = prompt("Introduce una direccion de email (ejemplo123@gmail.com): ")
}

alert("El correo introducido es correcto")