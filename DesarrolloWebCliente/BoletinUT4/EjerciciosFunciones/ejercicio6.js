/*Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.*/

function sumParam(...restParams){
    let suma = 0;

    for (let i = 0; i < restParams.length; i++) {
        suma += restParams[i]
    }

    return suma

}

let sumParam = (...restParams) => {
    let suma = 0;

    for (let i = 0; i < restParams.length; i++) {
        suma += restParams[i]
    }

    return suma

}

alert(sumParam(2,3,5))
