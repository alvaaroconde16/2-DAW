//Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.

let fecha = prompt("Introduce tu fecha de nacimiento (year-month-day): ")

const fechaActual = Date.now();
fecha = Date.parse(fecha);

if (fecha > fechaActual) {
    alert("La fecha de nacimiento introducida es mayor que la fecha actual.")
} else {
    alert("La fecha introducida es correcta.")
}
