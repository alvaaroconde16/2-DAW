//Escribe una expresión regular que extraiga todas las URLs de un texto HTML.

let cadena = prompt("Introduce el código HTML: ")

let condicion = /https?:\/\/[a-zA-Z0-9]+\.[a-z]+/g

let cadenaNueva = cadena.match(condicion)

alert(cadenaNueva)