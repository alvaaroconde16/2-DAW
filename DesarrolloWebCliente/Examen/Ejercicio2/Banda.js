class Banda{
    constructor(nombre, añoFormacion, integrantes, telefono, estilo){
        this.nombre = nombre;
        this.añoFormacion = añoFormacion;
        this.integrantes = integrantes;
        this.telefono = telefono;
        this.estilo = estilo;
        this.bandas = []
    }

    mostrarBanda(){
        return "Nombre: " + this.nombre + "\nAño de Formación: " + this.añoFormacion + "\nTeléfono: " + this.telefono + "\nEstilo: " + this.estilo
    }

    mostrarIntegrantes(){
        return this.integrantes.map(integrante => console.log("Dni: " + integrante.dni + ",  Nombre: " +  integrante.nombre + ", Apellido: " + integrante.apellido))
    }

}