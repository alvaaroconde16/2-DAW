//Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de 
//otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.

let texto = prompt("Introduce texto: ")

let comA = 0;

let cadena = texto.split(' ')

for (let index = 0; index < cadena.length; index++) {
    if (cadena[index].charAt(0) == ("A") || cadena[index].charAt(0) == ("a")) {
        comA += 1;
    }
}

alert("Hay un total de " + cadena.length + " palabras, " + comA + " comienzan por 'A'")