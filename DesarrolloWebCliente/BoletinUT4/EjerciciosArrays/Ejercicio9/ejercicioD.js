/*Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.*/

function sumaArgPares(){
    suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]%2 == 0) {
            suma += arguments[i]
        }
    }

    //return suma
    return arguments.filter(arguments%2).map()
}

var sumaArgPares = (...restParam) => {
    suma = 0;
    for (let i = 0; i < restParam.length; i++) {
        if (restParam[i]%2 == 0) {
            suma += restParam[i]
        }
    }

    return suma
}


alert(sumaArgPares(1,2,3,4,4,1))