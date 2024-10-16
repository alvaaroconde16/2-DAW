//Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.

let dia1 = prompt("Introduce dia de la primera fecha: ")
let mes1 = prompt("Introduce mes de la primera fecha: ")
let anyo1 = prompt("Introduce año de la primera fecha: ")

let dia2 = prompt("Introduce dia de la segunda fecha: ")
let mes2 = prompt("Introduce mes de la segunda fecha: ")
let anyo2 = prompt("Introduce año de la segunda fecha: ")

const fecha1 = new Date(anyo1, mes1 - 1, dia1)
const fecha2 = new Date(anyo2, mes2 - 1, dia2)

if (fecha1 > fecha2) {
    alert("La primera fecha es mayor que la segunda")
} else if (fecha2 > fecha1) {
    alert("La segunda fecha es mayor que la primera")
} else {
    alert("Las dos fechas son iguales")
}