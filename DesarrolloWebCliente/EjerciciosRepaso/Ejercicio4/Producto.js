class Producto{
    constructor(codigo, nombre, precio, stock){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    imprimirProducto(){
        return "Código: " + this.codigo + ",  Nombre: " + this.nombre + ",  Precio: " + this.precio + ",  Stock: " + this.stock
    }

    actualizarStock(cantidad){
        if (cantidad < 0) {
            if ((cantidad * -1) > this.stock) {
                return "No se puede quitar más del stock disponible"
            } else if ((cantidad * -1) < this.stock) {
                this.stock = this.stock - (cantidad * -1);
            }
        } else {
            this.stock = this.stock + cantidad;
        }
    }
}