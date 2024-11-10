class Pedido{
    constructor(cliente, productos, estado){
        this.cliente = cliente
        this.productos = productos
        this.estado = estado
    }

    imprimirPedido(){
        let nombre = this.cliente.nombre
        let direccion = this.cliente.direccion

        return "Nombre: " + nombre + "\nDirección: " + direccion + "\nEstado: " + this.estado + "\nProductos \n" 
        +  this.productos.map(producto => "Código" + producto.codigo + ",  Cantidad: " +  producto.cantidad)
    }

    actualizarEstado(estado){
        this.estado = estado
    }

}