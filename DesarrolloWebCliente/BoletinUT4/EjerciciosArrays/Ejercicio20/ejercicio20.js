/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. 
¿cómo podríamos optimizar la búsqueda?*/

/*var cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

var datos = new Array();
var i = 0;

while (cadena != "") {
    let array = cadena.split(",")

    datos[i] = array

    i += 1;
    cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

}*/

datos = [["Alvaro", "Conde", "123A", "10/10/2000"], ["Luis", "Garcia", "123B", "20/12/2001"]]


//Función para mostrar los datos que contiene nuestro array de datos
function mostrarDatos(){
    for (let index = 0; index < datos.length; index++) {
        console.log(datos[index])
    }
}


//Funcion flecha para conseguir los datos por apellidos o por DNI
function buscarApellido(apellido){
    let resultado = datos.filter((array) => array[1] == apellido);

    return resultado;
}


function buscarDni(dni){
    let resultado = datos.find((array) => array[2] == dni);

    return resultado;
}


function buscarEdad(edad){
    let resultado = datos.filter((array) => calcularEdad(array[3]) == edad);

    return resultado;
}


//Función para convertir la edad en años
function calcularEdad(edad){
    const hoy = new Date();
    let año = edad.split("/")[2];
    let fecha = hoy.getFullYear() - año; 

    return fecha;
}


mostrarDatos();

                      
var opcion = prompt("Introduce opción para buscar:\n1) Apellidos\n2) DNI\n3) Fecha de Nacimiento\n"); 


switch (opcion) {
    case "1":
        let apellido = prompt("Introduce el apellido por el que desea buscar: ")
        alert(buscarApellido(apellido))
        break;

    case "2":
        let dni = prompt("Introduce el dni por el que desea buscar: ")
        alert(buscarDni(dni))
        break;

    case "3":
        let edad = prompt("Introduce la edad por la que desea buscar: ")
        alert(buscarEdad(edad))
        break;

    default:
        break;
}
