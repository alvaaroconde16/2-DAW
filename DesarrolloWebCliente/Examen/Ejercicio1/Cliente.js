class Cliente{
    constructor(nombre, apellidos, dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.hoy = new Date()
        this.citas = []
        this.citasPendientes = []
        this.historialCitas = []
    }

    agregarCita(cita){
        if (cita.fecha < this.hoy || this.citas.find(citas => citas.fecha.getDate() && citas.fecha.getMonth() && 
            citas.fecha.getFullYear() == cita.fecha.getDate() && citas.fecha.getMonth() && citas.fecha.getFullYear())) {
            return "No se puede agregar la cita"
        } else if (cita.fecha > this.hoy) {
            this.citasPendientes.push(cita)
            return "Cita añadida"
        }
    }


    recordatorio(){
        var nuevaVentana;
        let nIntervId;

        //Mostramos todas las citas pendientes
        this.citasPendientes.map(cita => console.log(cita.fecha > this.hoy))

        //Añadimos al historial las citas que ya han pasado
        this.historialCitas.push(this.citasPendientes.filter(cita => cita.fecha < this.hoy))

        //Creamos el recordatorio mostrandolo en una nueva ventana
        if (this.citasPendientes.filter(cita => cita.fecha.getDate() == (this.hoy.getDate() - 1))) {
            nuevaVentana = window.open("","_blank","height=400,width=800");
            nuevaVentana.document.write('<h1> Su cita es mañana </h1>')
            nuevaVentana.focus();
        }

        nIntervId = setInterval(this.recordatorio, 60000)

    }


    iniciarRecordatorio() {
        // Iniciamos el intervalo con un tiempo de 60000 milisegundos(1 minuto)
        setInterval(() => this.recordatorio(), 60000);
    }


    imprimirCliente(){
        return "Nombre: " + this.nombre + "\nApellidos: " + this.apellidos + "\nDni: " + this.dni
    }
}
