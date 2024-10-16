let año = prompt("Introduce un año para comprobar si es bisiesto: ");

if (año % 400 == 0) {
    alert("El año es bisiesto");
} else if (año % 4 == 0 && año % 100 != 0) {
    alert("El año es bisiesto");
} else {
    alert("El año no es bisiesto")
}