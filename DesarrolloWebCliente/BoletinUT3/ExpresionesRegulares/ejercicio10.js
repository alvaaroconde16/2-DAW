//Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.

let cadena = prompt("Introduce la cadena: ")

cadena = cadena.replace(/\s{2}/g, " ")

alert(cadena)