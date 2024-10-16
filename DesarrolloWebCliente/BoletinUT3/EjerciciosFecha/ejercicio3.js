//Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.

let fecha = prompt("Introduce un tiempo en segundos (0-86400): ")

let hora = 0;
let minutos = 0;
let segundos = 0;

while (fecha >= 3600) {
    fecha -= 3600
    hora += 1
}

while (fecha >= 60) {
    fecha -= 60
    minutos += 1
}

segundos = fecha

alert("La fecha introducida es: " + hora + ":" + minutos + ":" + segundos)