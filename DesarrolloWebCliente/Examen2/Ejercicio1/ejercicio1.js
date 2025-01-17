document.addEventListener('DOMContentLoaded', functionDom)

function functionDom(){
    const viajes = [
        {"clase_pais":"usa", "ciudad_h2":"New York, NY", "detalle_precio_total":"1,899", "detalle_num_noches":7, "precio_noche":275, "ruta_imagen":"../photos/newyork.jpg", "pie_imagen":"Puente Brooklyn"},
        {"clase_pais":"paris", "ciudad_h2":"Paris, Francia", "detalle_precio_total":"1,499", "detalle_num_noches":5 ,"precio_noche":300, "ruta_imagen":"../photos/paris.jpg", "pie_imagen":"Notre Dame de Paris"},
        {"clase_pais":"uk", "ciudad_h2":"Londres, UK", "detalle_precio_total":"2,199", "detalle_num_noches":5, "precio_noche":440, "ruta_imagen":"../photos/london.jpg", "pie_imagen":"Torre de Londres"}]

    let h1 = document.getElementById('mostrar');
    let body = document.getElementById('body')
    
    //Creamos la lista
    let lista = document.createElement('ul');
    lista.style.display = 'none';
    body.appendChild(lista);


    //Creamos el contador que nos servirá luego para contar las veces que le damos al botón de reserva
    let contador = 0;
    

    viajes.forEach(viaje => {
        //Creamos los li y lo insertamos en la lista
        let li = document.createElement('li');
        li.classList.add('viaje_' + viaje.clase_pais);
        lista.appendChild(li);

        //Ahora vamos a crear el contenido de cada li
        let h2 = document.createElement('h2');
        h2.textContent = viaje.ciudad_h2;
        li.appendChild(h2);

        let span = document.createElement('span');
        span.classList.add('detalle');
        span.textContent = viaje.detalle_precio_total + "€ por " + viaje.detalle_num_noches + " noches";
        li.appendChild(span);

        let boton = document.createElement('button');
        boton.classList.add('reserva');
        boton.textContent = 'Resérvalo ya!';
        li.appendChild(boton)


        //Creamos el ul dentro de nuestro li
        let ul = document.createElement('ul');
        ul.classList.add('fotos')
        li.appendChild(ul);

        let ulLi = document.createElement('li');
        ul.appendChild(ulLi);
        
        let img = document.createElement('img');
        img.setAttribute('src', viaje.ruta_imagen);
        ulLi.appendChild(img);

        let liSpan = document.createElement('span');
        liSpan.textContent = viaje.pie_imagen;
        ulLi.appendChild(liSpan);


        //Ahora creamos el evento para cuando pasemos por encima de las imagenes o pie de viajes se coloque la clase "destacado" al precio por noche
        //Empezamos para cuando tengamos el raton encima
        img.addEventListener('mouseover', function (){
            span.classList.add('destacado');
        })

        liSpan.addEventListener('mouseover', function (){
            span.classList.add('destacado');
        })


        //Ahora para cuando ya no tengamos el raton por encima
        img.addEventListener('mouseout', function (){
            span.classList.remove('destacado');
        })

        liSpan.addEventListener('mouseout', function (){
            span.classList.remove('destacado');
        })


        //Creamos ahora un evento para cuando pulsemos el boton de reservar salga un campo para rellenar su nombre y quede almacenado
        boton.addEventListener('click', function (){
            //Comprobamos si el contador está a 0 para comprobar que no le hayamos dado ya
            if (contador == 0) {
                let input = document.createElement('input');
                let enviar = document.createElement('button');
                let oculto = document.createElement('p');
                enviar.textContent = 'Enviar';
                li.appendChild(input);
                li.appendChild(enviar);
                li.appendChild(oculto);


                //Aquí guardamos los datos del Nombre
                var savedNombre = localStorage.getItem('input');

                if (savedNombre) {
                    input.value = savedNombre;
                }


                //Controlamos el evento para cuando hagamos click al botón de enviar
                enviar.addEventListener('click', function(){
                    if (input.value != "") {
                        oculto.textContent = "";
                        localStorage.setItem('input', input.value);
                        alert('Nombre enviado correctamente')
                    } else {
                        oculto.textContent = "El nombre no puede estár vacío";
                    }
                })

                contador++;
            }
            
        })

    });


    //Creamos el evento de cuando hagamos click en el h1, se nos oculte o aparezca la lista que hemos creado
    h1.addEventListener('click', function (){
        if (h1.textContent == 'MOSTRAR VIAJES') {
            h1.textContent = 'OCULTAR VIAJES';
            lista.style.display = 'block'
        } else {
            h1.textContent = 'MOSTRAR VIAJES';
            lista.style.display = 'none';
        }
    })
}