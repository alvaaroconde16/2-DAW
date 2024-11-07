class Calificacion{
    constructor(){
        this.sesiones = []
    }

    ordenarTiempo(){
        this.sesiones.sort((a,b) => a.tiempo - b.tiempo)
    }

    ordenarPiloto(){
        this.sesiones.sort((a,b) => a.piloto.nombre.localeCompare(b.piloto.nombre))
    }

    comprobarSesion(piloto){
        return this.sesiones.find(sesion => sesion.piloto.nombre == piloto.nombre)
    }

    añadirSesion(piloto, tiempo){
        if (this.comprobarSesion(piloto) == undefined) {
            this.sesiones.push(new Sesion(piloto, tiempo))
        } else if (tiempo < this.comprobarSesion(piloto).tiempo) {
            //Esto se hace con la funcion comprobarSesion(piloto).tiempo porque la funcion devuelve la sesion completa y tiene el atributo tiempo por eso se pone asi.
            this.comprobarSesion(piloto).tiempo = tiempo 
        }
    }

    eliminarSesion(piloto){
        if (this.comprobarSesion(piloto) != undefined) {
            this.sesiones.splice(piloto)
        }
    }

}