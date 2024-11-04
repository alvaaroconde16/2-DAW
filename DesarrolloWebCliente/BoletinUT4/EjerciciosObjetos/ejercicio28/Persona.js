class Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    toString() {
        return "Nombre: " + this.nombre + ",  Apellidos: " + this.apellidos + ",  DNI: " + this.dni + ",  Fecha de nacimiento: " + this.fecha_nacimiento
    }
}