class Participante{
    constructor(nombre, dni, edad, ciudad){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    imprimirParticipante(){
        return "Nombre: " + this.nombre + ",  Dni: " + this.dni + ",  Edad: " + this.edad + ",  Ciudad: " + this.ciudad 
    }

    esMayorDeEdad(){
        let mayor = false

        if (this.edad >= 18) {
            mayor = true
        } else {
            mayor = false
        }

        return mayor
    }

    actualizarCiudad(ciudad){
        this.ciudad = ciudad
    }

    validarDni(){
        let valido = false;
        let estructura = /^[0-9]{8}[A-Z]?/g;
        
        if (!this.dni.match(estructura)) {
            valido = false
        } else {
            valido = true
        }

        return valido
    }
}