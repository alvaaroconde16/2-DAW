//Crea una expresión regular que reemplace todas las instancias de la palabra "malo" en un texto por "bueno". 
//Ahora modifica tu código para que el usuario introduzca las palabras a reemplazar.

let cadena = prompt("Introduce una cadena: ")
let palabra = prompt("Introduce la palabra que quieres cambiar: ")
let palabraNueva = prompt("Introduce la nueva palabra: ")

/*let cadenaNueva = cadena.replace(/malo/g, "bueno");*/
let cadenaNueva = cadena.replace(palabra, palabraNueva); 

alert(cadenaNueva)