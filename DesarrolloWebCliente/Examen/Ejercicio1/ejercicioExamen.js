//Creamos una nueva cita
var cita1 = new Citas("Sala 8", new Date("2024-11-11"))
var cita2 = new Citas("Sala 20", new Date("2024-12-11"))
var cita3 = new Citas("Sala 1", new Date("2024-11-12"))


//Creamos un nuevo cliente
var cliente1 = new Cliente("Alberto", "García", "123A")


//Le agregamos una citas, tanto antiguas como nuevas
console.log(cliente1.agregarCita(cita1))
console.log(cliente1.agregarCita(cita3))
console.log(cliente1.agregarCita(cita2))


//Vamos a iniciar el recordatorio para el cliente1
cliente1.iniciarRecordatorio()