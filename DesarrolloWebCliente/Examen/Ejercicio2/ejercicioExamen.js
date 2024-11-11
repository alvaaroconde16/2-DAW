//Creamos una lista de nuevas bandas
var banda1 = new Banda("SolMusica", "2014", [
    { dni: "123A", nombre: "Alberto", apellido: "Garcia" },
    { dni: "123B", nombre: "Luis", apellido: "Martos" },
    { dni: "123C", nombre: "Maria", apellido: "Lopez" },
  ], "654445872", "Solistas")

var banda2 = new Banda("Banda del Sol", "1998", [
    { dni: "123F", nombre: "Andrea", apellido: "Conde" },
    { dni: "123G", nombre: "Alejandro", apellido: "Manso" },
    { dni: "123H", nombre: "Joaquin", apellido: "Rodriguez" },
  ], "754782336", "Circo")

var banda3 = new Banda("SolMusica", "2014", [
    { dni: "123A", nombre: "Carla", apellido: "Torres" },
    { dni: "123B", nombre: "Lucia", apellido: "Boza" },
    { dni: "123C", nombre: "Carlos", apellido: "Lopez" },
  ], "654445872", "Solistas")


//Mostramos la información y los participantes de las bandas
console.log("Banda " + banda1.nombre)
console.log(banda1.mostrarBanda())
console.log("\nIntegrantes")
banda1.mostrarIntegrantes()

console.log("\nBanda " + banda2.nombre)
console.log(banda2.mostrarBanda())
console.log("\nIntegrantes")
banda2.mostrarIntegrantes()

console.log("\nBanda " + banda3.nombre)
console.log(banda3.mostrarBanda())
console.log("\nIntegrantes")
banda3.mostrarIntegrantes()


//Imprimimos un listado de bandas
var listado1 = new Listado()
listado1.agregarBanda(banda1)
listado1.agregarBanda(banda2)
listado1.agregarBanda(banda3)

console.log("\nListado de bandas")
listado1.imprimirListadoBandas()


//Bucamos una banda por su nombre
console.log("\nBuscamos la banda con nombre 'Banda del Sol'")
listado1.buscarBandaNombre("Banda del Sol")