/*Usando una implementación de objetos ES6 para guardar la sesión de calificación de un piloto con los siguientes atributos: 
piloto; // Objeto piloto, contendrá su nombre y escudería. 
tiempo; // Contendrá los ms de la mejor vuelta 

Y teniendo un array de sesiones de calificación, usando sort(); escribir el código necesario para ordenar el array de calificación por: 

A. Tiempos. 
B. Nombre de piloto. 

Añade una función para añadir al array una sesión de calificación nueva, en caso de que no exista una sesión para ese piloto y en caso de exista, 
si el tiempo el nuevo tiempo es menor, se modificará el tiempo en la sesión que ya existe en el array  y otra para eliminar del array 
(hay que comprobar que existe, crea una función para ello).

Crea un archivo para la clase Piloto. */


var piloto1 = new Piloto("Alberto", "Ferrari");

var calificación1 = new Calificacion();

if (calificación1.comprobarSesion(piloto1) == undefined) {
    console.log(piloto1.nombre + " no tiene sesiones disponibles")
} else {
    console.log(calificación1.comprobarSesion())
}

calificación1.añadirSesion(piloto1, "1:30")
console.log(calificación1.comprobarSesion(piloto1))


calificación1.añadirSesion(piloto1, "1:50")
console.log(calificación1.comprobarSesion(piloto1))


calificación1.añadirSesion(piloto1, "1:10")
console.log(calificación1.comprobarSesion(piloto1))


calificación1.eliminarSesion(piloto1)
console.log("Eliminando sesión de " + piloto1.nombre)
if (calificación1.comprobarSesion(piloto1) == undefined) {
    console.log(piloto1.nombre + " no tiene sesiones disponibles")
} else {
    console.log(calificación1.comprobarSesion())
}