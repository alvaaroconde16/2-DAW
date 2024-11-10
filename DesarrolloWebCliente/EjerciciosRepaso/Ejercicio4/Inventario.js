class Inventario{
    constructor(){
        this.productos = []
    }

    agregarProducto(producto){
        if (this.productos.find(productos => productos.codigo == producto.codigo)) {
            return "El producto ya existe, no se puede duplicar"
        } else {
            this.productos.push(producto)
        }
    }

    buscarProducto(codigo){
        if (this.productos.find(producto => producto.codigo == codigo)) {
            return this.productos.find(producto => producto.codigo == codigo)
        } else {
            return "El producto no ha sido encontrado"
        }
    }

    ordenarPorPrecio(){
        this.productos.sort((a,b) => a.precio - b.precio)
    }

    ordenarPorNombre(){
        this.productos.sort((a,b) => a.nombre.localeCompare(b.nombre))
    }

    imprimirInventario(){
        this.productos.filter(producto => console.log(producto.imprimirProducto()))
    }
}