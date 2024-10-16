var numero = 45464107;

function numCifras(numero){
    let numString = numero + "";
    let arrayCifras = [...numString]

    return arrayCifras.length
}

console.log(numero + " tiene " + numCifras(numero) + " dígitos")