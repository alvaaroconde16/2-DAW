/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada
de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/

var cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

var datos = new Array();
var i = 0;

while (cadena != "") {
    let array = cadena.split(", ")
    datos[i] = array

    i += 1;
    cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

}

console.log(datos);