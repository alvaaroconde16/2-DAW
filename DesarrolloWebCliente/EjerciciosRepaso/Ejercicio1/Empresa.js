class Empresa{
    constructor(){
        this.empleados = []
    }

    añadirEmpleado(empleado){
        this.empleados.push(empleado)
    }

    buscarEmpleadoPorDni(dni){
        return this.empleados.find(empleado => empleado.dni == dni)
    }

    ordenarPorPuesto(){
        return this.empleados.sort((a,b) => a.puesto.localeCompare(b.puesto))
    }

    imprimirEmpleados(){
        return this.empleados.map(empleado => empleado.imprimirEmpleado())
    }

    añadirProyectoAEmpleado(dni, proyecto){
        let empleado = this.empleados.find(empleado => empleado.dni == dni)

        empleado.asignarProyecto(proyecto);
    }

}