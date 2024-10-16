let nota = parseFloat(prompt("Introduce nota: "))

while (nota < 0 || nota > 10) {
    nota = parseFloat(prompt("Nota incorrecta, vuelva a introducir nota: "))
}

if (nota < 5) {
    console.log("SUSPENSO")
} else if (nota >= 5 && nota < 6) {
    console.log("APROBADO")
} else if (nota >= 6 && nota < 7) {
    console.log("BIEN")
} else if (nota >= 7 && nota < 9) {
    console.log("NOTABLE")
} else if (nota >= 9 && nota <= 10) {
    console.log("SOBRESALIENTE")
}