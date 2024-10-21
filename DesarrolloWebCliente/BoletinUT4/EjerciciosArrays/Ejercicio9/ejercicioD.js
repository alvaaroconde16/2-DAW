/*Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.*/

/*function sumaArgPares(){
    suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]%2 == 0) {
            suma += arguments[i]
        }
    }

    return suma
}*/

var sumaArgPares = (...restParam) => restParam
    .filter((num) => num % 2 == 0)
    .reduce((suma,num) => suma + num, 0);


alert(sumaArgPares(1,2,3,4,4,1))