//Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.

const fecha1 = new Date(2020, 11, 24)
const fecha2 = new Date(2012, 8, 7)
const fecha3 = new Date(2016, 4, 10)

const tablaFechas = [fecha1, fecha2, fecha3];

let fechaMayor = tablaFechas[0];
let fechaMenor = tablaFechas[0];

for (let index = 0; index < tablaFechas.length; index++) {
    if (tablaFechas[index] > fechaMayor) {
        fechaMenor = fechaMayor
        fechaMayor = tablaFechas[index]
    } else {
        fechaMenor = tablaFechas[index]
    }
}

let diferenciaMilisegundos = fechaMayor.getTime() - fechaMenor.getTime();
let diferenciaSegundos = diferenciaMilisegundos / 1000

console.log("Fecha mayor: " + fechaMayor)
console.log("Fecha menor: " + fechaMenor)
console.log("Diferencia de segundos entre ellas: " + diferenciaSegundos)
