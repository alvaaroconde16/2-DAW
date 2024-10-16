let vaso = parseInt(prompt("Introduce lugar de la bolita (1-3): "))

while (vaso < 1 || vaso > 3) {
    vaso = parseInt(prompt("Dato incorrecto. Introduce lugar de la bolita (1-3): "))
}

let bolita = Math.floor(Math.random() * 3) + 1

if (vaso == bolita) {
    alert("¡¡¡HAS ACERTADO!!!")
} else {
    alert("No lo has conseguido")
}