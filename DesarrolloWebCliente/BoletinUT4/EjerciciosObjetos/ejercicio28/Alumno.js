class Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    toString() {
        return "Nombre: " + this.nombre + ",  Apellidos: " + this.apellidos + ",  DNI: " + this.dni + ",  Fecha de nacimiento: " + this.fecha_nacimiento
    }
}

class Alumno{
    constructor(persona1, curso, notas){
        this.persona1 = persona1;
        this.curso = curso;
        this.notas = notas;
    }

    imprimirAlumno(){
        console.log(this.persona1.toString() + ",  Curso: " + this.curso + ",  Notas: " + this.notas)
    }

    calcularNotaMedia(){
        let sumaNotas = 0;
        let contarModulos = 0;

        for (let modulo in this.notas){
            sumaNotas += this.notas[modulo];
            contarModulos++;
        }

        return sumaNotas/contarModulos;
    }

    calcularMejorNota(){
        let mejorNota = 0
        let mejorModulo = [];

        for(let modulo in this.notas){
            if (this.notas[modulo] > mejorNota) {
                mejorNota = this.notas[modulo]
                mejorModulo = [modulo]
            } else if (this.notas[modulo] == mejorNota) {
                mejorModulo.push(modulo)
            }
        }

        return mejorNota + ". " + mejorModulo;
    }

}
