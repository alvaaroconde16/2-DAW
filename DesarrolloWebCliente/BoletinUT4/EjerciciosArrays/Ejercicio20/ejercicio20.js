/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. 
¿cómo podríamos optimizar la búsqueda?*/

/*var cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

var datos = new Array();
var i = 0;

while (cadena != "") {
    let array = cadena.split(", ")

    datos[i] = array

    i += 1;
    cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

}*/

datos = ["Alvaro", "Conde", "123A"], ["Luis", "Garcia", "123B"]


//Función para mostrar los datos que contiene nuestro array de datos
function mostrarDatos(){
    for (let index = 0; index < datos.length; index++) {
        console.log(datos[index])
    }
}


//Funcion flecha para conseguir los datos por apellidos o por DNI
function buscarApellido(apellido){
    let resultado = datos.filter((array) => array[1] == apellido)

    return resultado;
}


//Función para convertir la edad en años
function calcularEdad(fechaNacimiento){
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    const dia = hoy.getDate() - fechaNacimiento.getDate();

    if (mes < 0 || (mes == 0 && dia < 0)) {
        edad--;
    }

    return edad;
}


mostrarDatos();

var opcion = prompt("Introduce opción para  buscar: " + 
                      "1) Apellidos" + 
                      "2) DNI" + 
                      "3) Fecha Nacimiento")

switch (opcion) {
    case "1":
        let apellido = prompt("Introduce el apellido por el que desea buscar: ")
        console.log("Resultado de la búsqueda por apellido: ")
        console.log(buscarApellido(apellido))
        break;

    default:
        break;
}
