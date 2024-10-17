/*Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.*/

/*function elMenor(...restParam){

    let menor = restParam[0];
    for (let i = 0; i < restParam.length; i++) {
        if (restParam[i] < menor) {
            menor = restParam[i]
        }
    }

    return menor
}*/

var elMenor = (...restParam) => {
    let menor = restParam[0];
    for (let i = 0; i < restParam.length; i++) {
        if (restParam[i] < menor) {
            menor = restParam[i]
        }
    }

    return menor
}

alert("El número menor es: " + elMenor(10,2,4,16))