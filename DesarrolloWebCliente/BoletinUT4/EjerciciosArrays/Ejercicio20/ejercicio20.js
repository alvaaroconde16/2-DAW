/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. 
¿cómo podríamos optimizar la búsqueda?*/

var cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

var datos = new Array();
var i = 0;

while (cadena != "") {
    let array = cadena.split(", ")
    var persona = {
        nombre: array[0],
        apellidos: array[1],
        dni: array[2],
        fechaNacimiento: new Date(array[3])
    }

    datos[i] = persona

    i += 1;
    cadena = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento (separado por comas): ")

}


//Función para mostrar los datos que contiene nuestro array de datos
function mostrarDatos(){
    for (let index = 0; index < datos.length; index++) {
        console.log(datos[index])
    }
}


//Funcion flecha para conseguir los datos por apellidos o por DNI
function buscarPersona(busqueda){
    for (let index = 0; index < datos.length; index++) {
        persona = datos[index];
        if((persona.apellidos == busqueda) || (persona.dni == busqueda) || (calcularEdad(persona.fechaNacimiento) == busqueda)){
            console.log("Persona encontrada: " + persona)
        }
    }
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
buscarPersona("Alvaro");