// Crear algunos clientes
let cliente1 = new Cliente("Juan Pérez", "Calle Falsa 123");
let cliente2 = new Cliente("Ana López", "Avenida Siempre Viva 456");
let cliente3 = new Cliente("Carlos García", "Calle Real 789");



// Crear algunos productos
let pedido1 = new Pedido(cliente1, [
    { codigo: "P001", cantidad: 3 },
    { codigo: "P002", cantidad: 1 }
  ], "pendiente");
  
let pedido2 = new Pedido(cliente2, [
    { codigo: "P003", cantidad: 5 }
  ], "enviado");
  
let pedido3 = new Pedido(cliente3, [
    { codigo: "P004", cantidad: 2 },
    { codigo: "P002", cantidad: 4 }
  ], "completado");



// Crear la gestión de pedidos
let gestionPedidos = new GestionPedido();

// Añadir pedidos
gestionPedidos.añadirPedido(cliente1, pedido1);
gestionPedidos.añadirPedido(cliente2, pedido2);
gestionPedidos.añadirPedido(cliente3, pedido3);

// Imprimir todos los pedidos
console.log("Pedidos iniciales:");
console.log(pedido1.imprimirPedido())
console.log(pedido2.imprimirPedido())
console.log(pedido3.imprimirPedido())

// Eliminar un pedido
console.log(gestionPedidos.eliminarPedido("Juan Pérez"));

// Imprimir los pedidos después de eliminar
console.log("\nPedidos después de eliminar a Juan Pérez:");
console.log(pedido1.imprimirPedido())
console.log(pedido2.imprimirPedido())
console.log(pedido3.imprimirPedido())