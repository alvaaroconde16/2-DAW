class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    mostrarProducto(){
        return "Nombre: " + this.nombre + ",  Precio: " + this.precio + ",  Categoría: " + this.categoria
    }

    rebajarPrecio(porcentaje){
        return this.precio * (porcentaje / 100)
    }
}