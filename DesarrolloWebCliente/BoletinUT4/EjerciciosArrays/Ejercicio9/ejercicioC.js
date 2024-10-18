/*Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y 
devuelva un nuevo array con todos los parámetros concatenados.*/

function uneArrays(){
    let cadenaNueva = arguments.concat()
    return cadenaNueva
}

var uneArrays = (...restParam) => restParam.concat()


alert(uneArrays([1], [2], [3,4,5], [6]))