/*En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos).
Utiliza la estructura que sea más conveniente. 

Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
Calcula el número total de alumnos matriculados en todos los módulos*/


const IES = new Map();

IES.set("DWEC", {modulo: "Desarrollo Web en Entorno Cliente", duracion:60, numAlumnos:25})
IES.set("DWES", {modulo: "Desarrollo Web en Entorno Servidor", duracion:60, numAlumnos:25})
IES.set("DIW", {modulo: "Diseño de Interfaces Web", duracion:40, numAlumnos:20})
IES.set("DAW", {modulo: "Despliegue de Aplicaciones Web", duracion:45, numAlumnos:22})
IES.set("EIE", {modulo: "Empresa e Iniciativa Emprendedora", duracion:30, numAlumnos:15})


//Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
if (IES.has("DWES")) {
    console.log("Número de alumnos en el módulo 'DWES': " + IES.get("DWES").numAlumnos)
} else {
    console.log("No existe el módulo 'DWES'.")
}


//Calcula el número total de alumnos matriculados en todos los módulos
let totalAlumnos = 0;
for (let c of contenido){
    totalAlumnos += c.numAlumnos;
}

console.log("Tenemos un total de " + totalAlumnos + " alumnos matriculados entre todos los módulos.")