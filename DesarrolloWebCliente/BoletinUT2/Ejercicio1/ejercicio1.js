let radio = parseFloat(prompt("Introduce el radio de la circunferencia:"));
let area = (4 * 3.14 * (radio * radio));
let volumen = (4/3 * 3.14 * (radio * radio * radio));

alert("El area de la circunferencia con radio " + radio + " es: " + area);
alert("El volumen de la circunferencia con radio " + radio + " es: " + volumen);