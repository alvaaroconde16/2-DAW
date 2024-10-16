//Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.

let cadena = prompt("Introduce cadena que contenga nombres: ")

let palabras = /\w+/g;
let comC = /\bC|c/g;

let resultado = cadena.match(palabras);
let totalNombres = resultado.length;

let resultado2 = cadena.match(comC);
let contadorC = resultado2.length;

alert("Se han introducido " + totalNombres + " nombres")
alert("Se han introducido " + contadorC + " nombres que empiezan por 'C'")