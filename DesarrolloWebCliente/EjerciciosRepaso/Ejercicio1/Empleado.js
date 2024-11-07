class Empleado extends Persona{
    constructor(nombre, dni, puesto){
        super(nombre, dni)
        this.puesto = puesto;
        this.proyectos = [];
    }

    asignarProyecto(proyecto){
        this.proyectos.push(proyecto)
    }

    calcularTiempoTotal(){
        let sumatorio = 0;

        this.proyectos.filter(proyecto => proyecto.horas += sumatorio)

        return sumatorio
    }

    imprimirEmpleado(){
        return super.imprimirPersona() + ",  Puesto: " + this.puesto + ",  Proyectos: " + this.proyectos
    }
}