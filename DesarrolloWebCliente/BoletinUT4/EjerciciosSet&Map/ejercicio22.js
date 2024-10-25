/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

a. Muestra cuántos módulos hay almacenados
b. Muestra el contenido de la estructura
c. Devuelve las abreviaturas de todos los módulos guardados
d. Devuelve el nombre completo de todos los módulos
e. Consulta si está el módulo "DAW"
f. Si está, elimínalo.
g. Ordena alfabéticamente el map según las abreviaturas de los módulos*/

const IES = new Map();

IES.set("DWEC", "Desarrollo Web en Entorno Cliente")
IES.set("DWES", "Desarrollo Web en Entorno Servidor")
IES.set("DIW", "Diseño de Interfaces Web")
IES.set("DAW", "Despliegue de Aplicaciones Web")
IES.set("EIE", "Empresa e Iniciativa Emprendedora")


//Vamos a mostrar todos los módulos que tenemos almacenados en nuestro Map
console.log("Numero de módulos: " + IES.size)


//Mostrar el contenido de la estructura
console.log("Contenido de la estructura:")
for (let elemento of IES){
    console.log(elemento)
}


//Devolvemos la abreviatura de todos los módulos
let claves = IES.keys();

console.log("\nAbreviatura de todos los módulos:")
for(let k of claves){
    console.log(k);
}


//Devolvemos el nombre completo de todos los módulos
let contenido = IES.values();

console.log("\nNombre completo de todos los módulos:")
for (let c of contenido){
    console.log(c);
}


//Comprobamos si está el módulo "DAW"
console.log("\nComprobamos si está el módulo 'DAW': " + IES.has("DAW"))


//Si está, lo eliminamos
IES.delete("DAW")
console.log("\nEliminamos el módulo 'DAW': ")
for (let elemento of IES){
    console.log(elemento)
}


//Ordenar alfabéticamente el map según las abreviaturas de los módulos
console.log("\nMap ordenado alfabéticamente según las abreviaturas de los módulos:")
const IES_ordenado = new Map([...IES].sort());
for (let elemento of IES_ordenado){
    console.log(elemento)
}
