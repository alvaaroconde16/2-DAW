//Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.

let nombre = prompt("Introduce nombre: ")
let contador = 0;
let comC = 0;
let contN = 0;

while (nombre != "ULTIMO") {
    if (nombre.charAt(0) == "C") {
        comC += 1;
    } 

    if (nombre.indexOf("ñ") >= 0 || nombre.indexOf("Ñ") >= 0) {
        contN += 1;
    }

    contador += 1;

    nombre = prompt("Introduce nombre: ")

}

alert("Se han introducido " + contador + " nombre, " + comC + " comienzan por C y " + contN + " contienen la ñ")