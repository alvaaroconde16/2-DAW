// Crear instancia de Empresa
const miEmpresa = new Empresa();

// Crear empleados
const empleado1 = new Empleado("Carlos Perez", "12345678X", "Desarrollador");
const empleado2 = new Empleado("Maria Lopez", "87654321Z", "Diseñador");

// Crear proyectos
const proyecto1 = new Proyecto("Aplicación Web", 120);
const proyecto2 = new Proyecto("Diseño Gráfico", 80);
const proyecto3 = new Proyecto("Plataforma E-commerce", 200);

// Asignar proyectos a empleados
miEmpresa.añadirEmpleado(empleado1);
miEmpresa.añadirEmpleado(empleado2);

miEmpresa.añadirProyectoAEmpleado("12345678X", proyecto1);
miEmpresa.añadirProyectoAEmpleado("12345678X", proyecto3);
miEmpresa.añadirProyectoAEmpleado("87654321Z", proyecto2);

// Imprimir empleados y proyectos
console.log(miEmpresa.imprimirEmpleados());

// Buscar proyecto de mayor duración de un empleado
/*const proyectoMayorDuracion = miEmpresa.buscarProyectoMayorDuracion("12345678X");
console.log(proyectoMayorDuracion);*/