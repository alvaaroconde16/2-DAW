//Usa una expresión regular para eliminar todos los espacios en blanco de una cadena.

let cadena = prompt("Introduce la cadena: ")

cadena = cadena.replace(/\s/g, "");

alert(cadena)

