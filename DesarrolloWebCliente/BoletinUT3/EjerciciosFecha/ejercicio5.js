//Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.

const fechaNacimiento = prompt("Introduce tu fecha de nacimiento (año-mes-dia): ")

const fechaActual = new Date();
const año = fechaActual.getFullYear(); //Obtenemos el año actual para cambiarselo a la fecha de nacimiento

let proximoCumpleaños = new Date(fechaNacimiento); //Estabelecemos la fecha de nacimiento a su fecha de cumpleaños
proximoCumpleaños.setFullYear(año) //Le ponemos el año actual a la fecha de su cumpleaños para tener el cumpleaños de este año


//Si el cumpleaños ya ha pasado, le sumamos un año
if (fechaActual.getTime() > proximoCumpleaños.getTime()) {
    proximoCumpleaños.setFullYear(año + 1)
}

let difMilisegundos = proximoCumpleaños.getTime() - fechaActual.getTime();
let difSegundos = difMilisegundos / 1000;
let difDias = difSegundos / 86400;


if (difDias == 0) {
    console.log("¡Felicidades!")
} else {
    console.log("Faltan " + Math.round(difDias) + " días para tu cumpleaños.")
}