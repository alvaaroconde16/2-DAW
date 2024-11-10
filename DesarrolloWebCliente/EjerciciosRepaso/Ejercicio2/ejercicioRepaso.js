// Creamos productos
let producto1 = new Producto("Camiseta", 20, "Ropa");
let producto2 = new Producto("Smartphone", 200, "Electrónica");
let producto3 = new Producto("Auriculares", 50, "Electrónica");

// Creamos el carrito de compras
let carrito = new Carrito();

// Agregamos productos al carrito
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

// Mostramos el carrito antes del descuento
console.log("Carrito antes de aplicar descuento:");
carrito.mostrarCarrito();

// Calculamos el total
console.log("Total sin descuento: " + carrito.calcularTotal());

// Aplicamos un descuento del 10% a todos los productos
console.log("\nAplicamos un descuento del 10%")
carrito.aplicarDescuento(10);

// Mostramos el carrito después del descuento
console.log("\nCarrito después de aplicar descuento:");
carrito.mostrarCarrito();

// Calculamos el total después del descuento
console.log("Total con descuento: " + carrito.calcularTotal());