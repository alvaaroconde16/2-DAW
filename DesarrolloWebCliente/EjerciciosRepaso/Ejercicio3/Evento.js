class Evento{
    constructor(nombre, fecha){
        this.nombre = nombre
        
        let estructura = /^\d{4}-\d{2}-\d{2}$/g;

        if (!fecha. match(estructura)) {
            console.log("\nLa fecha introducida no es válida")
        } else {
            this.fecha = new Date(fecha)
        }
        
        this.participantes = []
    }

    agregarParticipante(participante){
        this.participantes.push(participante)
    }

    buscarParticipanteDni(dni){
        let participante = this.participantes.find(participante => participante.dni == dni)

        return participante.imprimirParticipante()
    }

    listarParticipantes(){
        this.participantes.map(participante => console.log(participante.imprimirParticipante()))
    }

    ordenarParticipantesEdad(){
        let participante = this.participantes.sort((a,b) => a.edad - b.edad)

        return participante.map(participante => console.log(participante.imprimirParticipante()))
    }

    participantesMayorDeEdad(){
        let participante = this.participantes.filter(participante => participante.edad >= 18)

        return participante.map(participante => console.log(participante.imprimirParticipante()))
    }

    mostrarFechaEvento(){
        let dia = this.fecha.getDate()
        let mes = this.fecha.getMonth() + 1
        let año = this.fecha.getFullYear()

        return dia + "-" + mes + "-" + año 
    }
}