document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    const viajes = [
        {src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    ]


    //Obtenemos el contenedor en el que van a ir todos los viajes
    let contenedor = document.getElementById('todos-los-viajes');


    //Ahora creamos el h1 y lo metemos en el contenedor
    let titulo = document.createElement('h1');
    titulo.textContent = "Subtitulo";
    contenedor.appendChild(titulo);


    //Creamos la lista la cual va a contener todos los <li> y la introducimos en el contenedor
    let lista = document.createElement('ul')
    contenedor.appendChild(lista)



    //Ahora vamos a recorrer el array de viajes para ir añadiendo todos los viajes
    viajes.forEach(viaje => {

        //Creamos el <li>
        let li = document.createElement('li');

        //Creamos la imagen
        let img = document.createElement('img');
        img.setAttribute('src', viaje.src);
        li.appendChild(img)

        //Creamos la descripcion
        let descripcion = document.createElement('p');
        descripcion.textContent = viaje.desc;
        li.appendChild(descripcion);


        //Ahora vamos a crear la lista de especificaciones
        let ulSpecs = document.createElement('ul');
        ulSpecs.classList.add('specs');

        li.appendChild(ulSpecs)

        viaje.specs.forEach(spec => {
            let liSpecs = document.createElement('li');
            liSpecs.textContent = spec
            ulSpecs.appendChild(liSpecs)
        })

        li.appendChild(ulSpecs);
        lista.appendChild(li);


        //#######################################################################  EJERCICIO 9  #######################################################################
        
        //Añadimos el evento al hacer click en la imagen
        img.addEventListener("click", function (){
            if (descripcion.style.display !== "none" && ulSpecs.style.display !== "none") {
                descripcion.style.display = "none";
                ulSpecs.style.display = "none";
            } else {
                descripcion.style.display = "block";
                ulSpecs.style.display = "block";
            }
        })

    })

}