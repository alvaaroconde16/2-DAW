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
