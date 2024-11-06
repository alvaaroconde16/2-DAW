class Alumno{
    constructor(persona, curso, notas){
        this.persona = persona;
        this.curso = curso;
        this.notas = notas;
    }

    imprimirAlumno(){
        console.log(this.persona.toString() + ",  Curso: " + this.curso + ",  Notas: " + this.notas)
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