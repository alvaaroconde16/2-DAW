class Listado{
    constructor(){
        this.bandas = []
    }

    agregarBanda(banda){
        this.bandas.push(banda)
    }

    imprimirListadoBandas(){
        this.bandas.map(banda => console.log(banda.mostrarBanda()))
    }

    buscarBandaNombre(nombre){
        let banda = this.bandas.find(banda => banda.nombre == nombre)
        console.log(banda.mostrarBanda())
    }
}