/*Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array 
con todos los valores del segundo array colocados en el centro del primer array.*/

/*function colocaEnMedio(array1, array2){
    let index = array1.length / 2;

    array1.splice(index, 0, array2)

    return array1
}*/

var colocaEnMedio = (array1, array2) => {
    let index = array1.length / 2;

    array1.splice(index, 0, array2)

    return array1
}


alert(colocaEnMedio([1,2,7,8], [3,4,5,6]))