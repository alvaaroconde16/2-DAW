class Citas{
    constructor(sala, fecha){
        this.sala = sala;
        this.fecha = new Date(fecha)
    }

    imprimirCita(){
        return "Sala: " + this.sala + "\nFecha: " + this.fecha
    }
}