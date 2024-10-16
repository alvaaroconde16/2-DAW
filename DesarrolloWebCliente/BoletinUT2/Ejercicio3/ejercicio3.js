let num = (prompt("Introduce el número a calcular su inverso:"));
let inversa;

if (num == 0) {
    alert("No se puede calcular el inverso de 0")
} else {
    inversa = num * -1;
    alert("El inverso de " + num + " es: " + inversa);
}
