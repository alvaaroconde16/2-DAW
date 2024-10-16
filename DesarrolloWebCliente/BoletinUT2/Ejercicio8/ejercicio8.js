let num = prompt("Introduce numero: ")
let sumatorio = 0;

for (let index = 1; index <= num; index++) {
    alert(index + ", Cuadrado: " + index * index + ", Cubo: " + index * index * index)
    sumatorio += sumatorio + index
}

alert("La suma de los primeros " + num + " números naturales es: " + sumatorio)