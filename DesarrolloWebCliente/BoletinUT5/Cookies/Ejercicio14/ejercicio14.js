/*Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   con   diferentes tipos   de   cafés   ­   espresso,   cappuccino,   
moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación   y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   
que va   a   enviar   el   café   a   su   número   de   habitación.   Cree   las   cookie   para   recordar   las preferencias   del   usuario.   La   próxima   vez   
que   el   usuario  entre en la   página, en introduzca su nombre de usuario y habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, se le dirá 
que hay una tarifa especial y su próximo café será gratuito.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("cafeForm").reset();

    var nombre = getCookie("nombre");
    var habitacion = getCookie("habitacion");
    var cafe = getCookie("cafe");

    if (nombre && habitacion && cafe) {
      alert("Hola " + nombre + ",")
    }

    document.getElementById("boton").addEventListener("click", enviar)
}


function enviar(){
    nombre = document.getElementById("nombre").value
    habitacion = document.getElementById("habitacion").value
    cafe = document.querySelector('input[name="cafe"]:checked')
    
    if (nombre == "") {
        alert("Introduzca un nombre")
    } else if (habitacion == "") {
        alert("Introduzca número de habitación")        
    } else if (!cafe) {
        alert("Selecciona un tipo de café")
    } else {
        alert("Hola " + nombre + ", su pedido de café " + cafe.value + " será enviado a la habitación " + habitacion)
    }
    
    
    setCookie("nombre", nombre, 365)
    setCookie("habitacion", habitacion, 365)
    setCookie("cafe", cafe.value, 365)

    

}


//################################COOKIES################################

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}





