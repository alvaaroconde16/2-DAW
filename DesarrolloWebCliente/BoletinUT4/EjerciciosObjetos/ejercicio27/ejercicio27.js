/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/

const persona1 = new Persona("Álvaro", "Conde", "123A", "16/07/2004")
const persona2 = new Persona("Luis", "Garcia", "123B", "10/12/1998")

var datos = new Array();

datos = [[persona1], [persona2]]



//Función para mostrar los datos que contiene nuestro array de datos
function mostrarDatos(){
    for (let index = 0; index < datos.length; index++) {
        console.log(datos[index])
    }
}


//Funcion flecha para conseguir los datos por apellidos
const buscarApellido = (apellido) => datos.filter((Persona) => Persona.apellido == apellido)


//Funcion flecha para conseguir los datos por DNI
const buscarDni = (dni) => datos.filter((Persona) => Persona.dni == dni)


//Función flecha para conseguir los datos por su edad
const buscarEdad = (edad) => datos.filter((Persona) => Persona.dni == buscarEdad(edad))


//Función para convertir la edad en años
function calcularEdad(edad){
    const hoy = new Date();
    let año = edad.split("/")[2];
    let fecha = hoy.getFullYear() - año; 

    return fecha;
}