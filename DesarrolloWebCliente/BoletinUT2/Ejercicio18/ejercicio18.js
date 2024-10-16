let tiempo = parseInt(prompt("Introduce tiempo en segundos (0-86400): "))
let hora = 0;
let minuto = 0;

if (tiempo < 86400) {
    while (tiempo >= 3600) {
        hora += 1;
        tiempo -= 3600;
    }
    
    while (tiempo >= 60) {
        minuto += 1;
        tiempo -= 60;
    
        if (minuto == 60) {
            hora += 1;
            minuto = 0;
        }
    
    }    
} else {
    alert("El tiempo introducido supera el límite")
}

alert("La hora introducida sería =  " + hora + ":" + minuto + ":" + tiempo)