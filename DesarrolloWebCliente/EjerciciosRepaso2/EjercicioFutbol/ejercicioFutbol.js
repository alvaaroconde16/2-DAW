document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    const partidos = [
        {
            "url_escudo_eq1": "/escudos/rayo.gif",
            "nombre_eq1": "Rayo Vallecano",
            "resultado_eq1": "1",
            "url_escudo_eq2": "/escudos/getafe.gif",
            "nombre_eq2": "Getafe",
            "resultado_eq2": "2"
          },
          {
            "url_escudo_eq1": "/escudos/osasuna.gif",
            "nombre_eq1": "Osasuna",
            "resultado_eq1": "2",
            "url_escudo_eq2": "/escudos/betis.gif",
            "nombre_eq2": "Betis",
            "resultado_eq2": "1"
          },
          {
            "url_escudo_eq1": "/escudos/real_madrid.gif",
            "nombre_eq1": "Real Madrid",
            "resultado_eq1": "3",
            "url_escudo_eq2": "/escudos/barcelona.gif",
            "nombre_eq2": "Barcelona",
            "resultado_eq2": "1"
          },
          {
            "url_escudo_eq1": "/escudos/valencia.gif",
            "nombre_eq1": "Valencia",
            "resultado_eq1": "0",
            "url_escudo_eq2": "/escudos/athletic_bilbao.gif",
            "nombre_eq2": "Athletic Bilbao",
            "resultado_eq2": "0"
          },
          {
            "url_escudo_eq1": "/escudos/sevilla.gif",
            "nombre_eq1": "Sevilla",
            "resultado_eq1": "2",
            "url_escudo_eq2": "/escudos/villarreal.gif",
            "nombre_eq2": "Villarreal",
            "resultado_eq2": "2"
          }
    ]

    let contenedor = document.getElementById('partidos');

    partidos.forEach(partido => {

        //Creamos el div
        let div = document.createElement('div');
        div.classList.add('equipos');
        contenedor.appendChild(div);


        //Creamos la imagen del primer escudo con su div
        let divEscudo1 = document.createElement('div');
        divEscudo1.classList.add('escudo');

        let escudo1 = document.createElement('img');
        escudo1.setAttribute('src', partido.url_escudo_eq1);
        divEscudo1.appendChild(escudo1);
        div.appendChild(divEscudo1);


        //Creamos ahora el nombre del primer equipo con su div
        let divEquipo1 = document.createElement('div');
        divEquipo1.classList.add('equipo');
        divEquipo1.textContent = partido.nombre_eq1;
        div.appendChild(divEquipo1);


        //Creamos el resultado del primer equipo
        let resultado1 = document.createElement('div');
        resultado1.classList.add('resultado');
        resultado1.textContent = partido.resultado_eq1;
        div.appendChild(resultado1);


        //Creamos el resultado del segundo equipo
        let resultado2 = document.createElement('div');
        resultado2.classList.add('resultado');
        resultado2.textContent = partido.resultado_eq2;
        div.appendChild(resultado2);


        //Creamos ahora el nombre del segundo equipo con su div
        let divEquipo2 = document.createElement('div');
        divEquipo2.classList.add('equipo');
        divEquipo2.textContent = partido.nombre_eq2;
        div.appendChild(divEquipo2);


        //Creamos la imagen del primer escudo con su div
        let divEscudo2 = document.createElement('div');
        divEscudo2.classList.add('escudo');

        let escudo2 = document.createElement('img');
        escudo2.setAttribute('src', partido.url_escudo_eq2);
        divEscudo2.appendChild(escudo2);
        div.appendChild(divEscudo2);


        //Creamos ahora la lista
        let lista = document.createElement('ul');
        lista.style.display = 'none';
        div.appendChild(lista);

        //Empezamos creando la cronica
        let liCronica = document.createElement('li');
        let aCronica = document.createElement('a');
        aCronica.textContent = "Crónica";
        liCronica.appendChild(aCronica);
        lista.appendChild(liCronica)


        //Y ahora creamos el asi lo vivimos
        let liVivimos = document.createElement('li');
        let aVivimos = document.createElement('a');
        aVivimos.textContent = "Así lo vivimos";
        liVivimos.appendChild(aVivimos);
        lista.appendChild(liVivimos)


        //Al pasar por encima de las imagenes mostramos la lista. Esperamos 3 segundos para que desaparezca
        escudo1.addEventListener('mouseover', function(){
            lista.style.display = 'block';
        })

        escudo1.addEventListener('mouseout', function(){
            setTimeout(() => {
                lista.style.display = 'none';
            }, 3000);
        })

        escudo2.addEventListener('mouseover', function(){
              lista.style.display = 'block';
        })

        escudo2.addEventListener('mouseout', function(){
            setTimeout(() => {
                lista.style.display = 'none';
            }, 3000);
        })


        //Cuando pasamos el raton por encima del marcador, aumentamos el tamaño de la fuente en 2 puntos
        resultado1.addEventListener('mouseover', function(){
            resultado1.style.fontSize = '20px';
            resultado2.style.fontSize = '20px';
        })

        resultado1.addEventListener('mouseout', function(){
            resultado1.style.fontSize = '18px';
            resultado2.style.fontSize = '18px';
        })

        resultado2.addEventListener('mouseover', function(){
            resultado1.style.fontSize = '20px';
            resultado2.style.fontSize = '20px';
        })

        resultado2.addEventListener('mouseout', function(){
            resultado1.style.fontSize = '18px';
            resultado2.style.fontSize = '18px';
        })
    })
}