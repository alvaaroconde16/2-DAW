/*Realizar un script que tome una serie de palabras ingresadas por el usuario (separadas por coma) y almacena esas palabras en un array. 
Posteriormente, manipule el array para mostrar en una nueva ventana los siguientes datos: 

    La primera palabra ingresada por el usuario 
    La última palabra ingresada por el usuario
    El número de palabras presentes en el array
    Todas las palabras ordenadas alfabéticamente
*/

var palabras = prompt("Introduce una serie de palabras separadas por coma: ")

arrayPalabras = palabras.split(", ")

function gestCadena(arrayPalabras){
    ventana = window.open("", "_blank", "height=400, width=800")
    ventana.document.write("Primera palabra: " + arrayPalabras[0] + "<br>")
    ventana.document.write("Última palabra: " + arrayPalabras[arrayPalabras.length - 1] + "<br>")
    ventana.document.write("Numero de palabras presentes en el array: " + arrayPalabras.length + "<br>")

    ventana.document.write("Todas las palabras ordenadas alfabéticamente: " + "<br>")
    arrayPalabras = arrayPalabras.sort()
    for (let i = 0; i < arrayPalabras.length; i++) {
        ventana.document.write(arrayPalabras[i] + "<br>")
    }
}

console.log(gestCadena(arrayPalabras))