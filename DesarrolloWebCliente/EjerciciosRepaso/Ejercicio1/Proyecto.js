class Proyecto{
    constructor(nombre, horas){
        this.nombre = nombre;
        this.horas = horas;
    }

    imprimirProyecto(){
        return "Nombre: " + this.nombre + ",  Horas: " + this.horas
    }
}