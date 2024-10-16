let repetir = "si"

while (repetir == "si") {
    let euros = parseFloat(prompt("Introduce cantidad en euros: "))

    console.log("1.- Dolares")
    console.log("2.- Libras")
    console.log("3.- Yenes")
    console.log("4.- Franco Suizo")
    console.log("5.- Corona Noruega")

    let opcion = parseInt(prompt("Introduce una opcion: "))

    switch (opcion) {
        case 1:
            console.log("Dólares: " + euros * 1.12)
            break;

        case 2: 
            console.log("Libras: " + euros * 0.83)
            break;

        case 3: 
            console.log("Yenes: ") + euros * 158.33
            break;

        case 4:
            console.log("Fraco Suizo: ") + euros * 0.94
            break;

        case 5: 
            console.log("Corona Noruega: " + euros * 11.72)
            break;
    
        default:
            break;
    }

    repetir = prompt("¿Desea repetir el programa? (si/no)")

}