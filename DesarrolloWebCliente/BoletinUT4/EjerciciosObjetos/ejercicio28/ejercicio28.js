/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno, 
otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos).*/

var persona1 = new Persona("Juan", "Lucena", "123A", "16/05/2000")
var persona2 = new Persona("Maria", "Garcia", "123B", "10/12/2005")

var notasJuan = {Matemáticas: 8, Lenguaje: 4, Historia: 10, Ingles: 6}
var juan = new Alumno(persona1, "2º Bachillerato", notasJuan);

var notasMaria = {Matemáticas: 4, Lenguaje: 8, Historia: 8, Ingles: 7}
var maria = new Alumno(persona2, "1º Bachillerato", notasMaria);


console.log("La nota media de Juan es: " + juan.calcularNotaMedia())
console.log("La nota media de Maria es: " + maria.calcularNotaMedia())

console.log("La mejor nota y mejor modulo de Juan es: " + juan.calcularMejorNota())
console.log("La mejor nota y mejor modulo de Maria es: " + maria.calcularMejorNota())


var aula1 = new Aula()
aula1.alumnos.push(juan, maria)


console.log("Buscar alumno por DNI '123A':\n" + aula1.buscarAlumnoDni('123A'))
console.log("Ordenar el array de alumnos por nota:\n" + aula1.ordenarNota())
console.log("Ordenar el array de alumnos por Apellido:\n" + aula1.ordenarApellido())
console.log("Imprimir los alumnos:\n" + aula1.imprimirAlumnos())