class Persona{
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }

    imprimirPersona(){
        return "Nombre: " + this.nombre + "  , DNI: " + this.dni;
    }
}