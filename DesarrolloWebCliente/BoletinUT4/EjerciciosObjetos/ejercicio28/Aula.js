class Aula{
    constructor(){
        this.alumnos = [];
    }

    buscarAlumnoDni(dni){
        return this.alumnos.find(alumno => alumno.persona.dni == dni);
    }
}