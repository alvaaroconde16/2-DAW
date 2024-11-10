class Cliente{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }

    imprimirCliente(){
        return "Nombre: " + this.nombre + ",  Dirección: " + this.direccion
    }
}