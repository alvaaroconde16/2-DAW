//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Introduce texto: ")

tamaño = texto.length;
palabra = "";

for (let index = 0; index <= texto.length; index++) {
    palabra += texto.charAt(tamaño);
    tamaño -= 1;
}

alert("La palabra dada la vuelta es: " + palabra)