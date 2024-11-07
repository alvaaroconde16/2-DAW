class Aula{
    constructor(){
        this.alumnos = [];
    }

    buscarAlumnoDni(dni){
        var alumno = this.alumnos.find(alumno => alumno.persona.dni == dni);
        return alumno.persona.toString();
    }

    ordenarNota(){ 
        var nota = this.alumnos.sort((a,b) => {
            let notaMediaA = a.calcularNotaMedia();
            let notaMediaB = b.calcularNotaMedia();

            if (notaMediaA > notaMediaB) return -1
            if (notaMediaA < notaMediaB) return 1

            return 0
        });

        return nota.map(alumno => alumno.persona.toString());
    }

    ordenarApellido(){
        var ordenadoApellido = this.alumnos.sort((a,b) => a.persona.apellidos.localeCompare(b.persona.apellidos));
        return ordenadoApellido.map(alumno => alumno.persona.toString());
    }

    imprimirAlumnos(){
        return this.alumnos.map(alumnos => alumnos.persona.toString());
    }
}