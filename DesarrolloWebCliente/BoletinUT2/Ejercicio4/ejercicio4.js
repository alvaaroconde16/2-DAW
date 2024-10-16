let hora = prompt("Introduce la hora (00-23): ");
let minuto = prompt("Introduce los minutos (00-59): ");

hfinal = hora + ":" + minuto;

/*if (hora >= 7 && minuto >= 30 && hora <= 14) {
    alert("Buenos días");
} else if (hora >= 14 && minuto >= 0 && hora <= 20) {
    alert("Buenas tardes");
} else if (hora >= 20 && minuto >= 31 || hora <= 7) {
    alert("Buenas noches");
}*/

let h1 = "07:30";
let h2 = "14:00";
let h3 = "20:30";

if (hfinal >= h1 && hfinal <= h2) {
    alert("Buenos días");
} else if (hfinal > h1 && hfinal <= h3) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
}