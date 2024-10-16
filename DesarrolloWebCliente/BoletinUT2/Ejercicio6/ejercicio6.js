let x = prompt("Introduce x: ");
let y = prompt("Introduce y: ");

//Calculamos el cuadrante en el que se encuentran las coordenadas
if (x > 0 && y > 0) {
    alert("Está en el primer cuadrante")
} else if (x < 0 && y > 0) {
    alert("Está en el segundo cuadrante")
} else if (x < 0 && y < 0) {
    alert("Está en el tercer cuadrante")
} else if (x > 0 && y < 0) {
    alert("Está en el cuarto cuadrante")
}

//Calculamos si se encuentra en el origen
if (x == 0 && y == 0) {
    alert("Está en el origen")
}


//Calculamos si se encuentra en algún eje 
if (x == 0 && y != 0) {
    alert("Está en el eje 'x'");
} else if (x != 0 && y == 0) {
    alert("Está en el eje 'y'");
}