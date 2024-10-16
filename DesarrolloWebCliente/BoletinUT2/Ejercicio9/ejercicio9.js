let num = parseInt(prompt("Introduce numero: "))

let sumatorio = 0;
let menor = num;
let mayor = num;
let contador = 0;

while (num > 0) {
    if (menor > num) {
        menor = num;
    } else if (mayor < num) {
        mayor = num;
    }
    
    sumatorio += num;
    contador++;

    num = parseInt(prompt("Introduce un numero: "))
}

alert("El numero menor es: " + menor)
alert("El numero mayor es: " + mayor)
alert("La media de todos los numeros es: " + sumatorio / contador)
