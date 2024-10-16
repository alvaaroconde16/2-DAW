//Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad del usuario por pantalla.

let cadena = prompt("Introduce nombre, profesión y edad (separado por comas): ")

let tabla = cadena.split(", ");

alert("Tu edad es de " + tabla[2] + " años")