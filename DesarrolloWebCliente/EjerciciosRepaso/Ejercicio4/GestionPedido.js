class GestionPedido{
    constructor(){
        this.pedidos = []
    }

    ordenarPorEstado(){
        this.pedidos.sort((a,b) => a.estado.localeCompare(b.estado))
    }

    ordenarPorNombreCliente(){
        this.pedidos.sort((a,b) => a.cliente.nombre.localeCompare(b.cliente.nombre))
    }

    añadirPedido(cliente, productos, estado){
        var pedido = new Pedido(cliente, productos, estado = "prendiente")
        this.pedidos.push(pedido)
    }

    eliminarPedido(cliente){
        let pedido = this.pedidos.find(pedido => pedido.cliente.nombre == cliente) 

        if (pedido) {
            let index = this.pedidos.indexOf(pedido);

            this.pedidos.splice(index, 1)
            return "Pedido de " + cliente + " eliminado"
        } else {
            return "No se ha encontrado ningún producto"
        }
    }
}