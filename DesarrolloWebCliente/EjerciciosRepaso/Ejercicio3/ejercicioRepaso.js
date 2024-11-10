//Creamos los participantes
var participante1 = new Participante("Alberto", "12355977A", 24, "Sevilla")
var participante2 = new Participante("María", "123B", 15, "Málaga")
var participante3 = new Participante("Mario", "123C", 42, "Galicia")


//Mostramos la información de los participantes
console.log(participante1.imprimirParticipante())
console.log(participante2.imprimirParticipante())
console.log(participante3.imprimirParticipante())


//Vamos a ver si es mayor de edad el participante
console.log("\nEs mayor de edad: " + participante1.esMayorDeEdad())
console.log("Es mayor de edad: " + participante2.esMayorDeEdad())
console.log("Es mayor de edad: " + participante3.esMayorDeEdad())


//Vamos a actualizar la ciudad del participante2
participante2.actualizarCiudad("Cádiz")

console.log("\nCiudad actualizada de " + participante2.nombre)
console.log(participante2.imprimirParticipante())


//Vamos a validar el dni de los participantes
console.log("\nVamos a validar los DNIs de los participantes")
console.log("Dni válido: " + participante1.validarDni())
console.log("Dni válido: " + participante2.validarDni())
console.log("Dni válido: " + participante3.validarDni())

//------------------------------------------------------------------------------------

//Creamos un evento
var evento1 = new Evento("Puro Latino", "2025-07-12");


//Agregamos participantes
evento1.agregarParticipante(participante1)
evento1.agregarParticipante(participante2)


//Buscamos un participante por su dni
console.log("\nBuscamos el participante con dni '12355977A'")
console.log(evento1.buscarParticipanteDni("12355977A"))


//Listamos todos los participantes del evento
console.log("\nListamos todos los participantes del evento " + evento1.nombre)
evento1.listarParticipantes()


//Vamos a ordenar a los participantes por su edad
console.log("\nOrdenamos los participantes por su edad")
evento1.ordenarParticipantesEdad()


//Vamos a mostrar los participantes mayor de edad
console.log("\nMostramos los participantes mayores de edad")
evento1.participantesMayorDeEdad()


//Ahora vamos a mostrar la fecha del evento
console.log("\nMostramos la fecha del evento " + evento1.nombre)
console.log(evento1.mostrarFechaEvento())