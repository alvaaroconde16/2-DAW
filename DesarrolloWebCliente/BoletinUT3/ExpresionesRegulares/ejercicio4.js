//Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
//Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  
//“(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.

let texto = prompt("Introduce texto: ")

let primPar = texto.indexOf("(");
let segPar = texto.indexOf(")");
let palabra = "";

if (primPar >= 0) {
    
    //Comprobamos si existe el segundo paréntesis
    if (segPar > 0) {
        palabra = texto.substring(primPar + 1, segPar)
    } else {
        palabra = texto.substring(primPar + 1)
    }


} 

alert("La palabra que se encuentra entre paréntesis es: " + palabra)