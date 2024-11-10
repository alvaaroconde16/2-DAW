class Carrito{
    constructor(){
        this.productos = []
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    mostrarCarrito(){
        return this.productos.map(producto => console.log(producto.mostrarProducto()));
    }

    calcularTotal(){
        let sumatorio = this.productos.reduce((total, producto) => total + producto.precio, 0)

        return sumatorio
    }

    aplicarDescuento(porcentaje){
        this.productos.map(producto => producto.precio -= producto.precio * (porcentaje/100))
    }
}