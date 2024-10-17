/*Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) 
que devuelva el número de cifras del mismo. Utiliza el operador spread.*/

var numero = 45464107;

function numCifras(numero){
    let numString = numero + "";
    let arrayCifras = [...numString]

    return arrayCifras.length
}

console.log(numero + " tiene " + numCifras(numero) + " dígitos")