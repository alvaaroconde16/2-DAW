document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    const partidos = [
        {
            "url_escudo_eq1": "https://lh6.googleusercontent.com/proxy/7DmzPDcrEEy2UULFs3bX4MXEVDHWJDMFBtRXcryDuCvSM4Lm00RfPiC9d2jVX-MIhbwgn7kYytaoXLKFJv6i3bkyzYhoe20tVXp-tjExIyPbn_6Q1vJvC24Us-l4spzI2PcFsCnuEp4hIwyPNeqOjI1CdJDUkA",
            "nombre_eq1": "Rayo Vallecano",
            "resultado_eq1": "1",
            "url_escudo_eq2": "https://statics-maker.llt-services.com/get/images/2023/04/26/xlarge/289e92ca-3d51-4101-813c-41596e9107bf.png",
            "nombre_eq2": "Getafe",
            "resultado_eq2": "2"
          },
          {
            "url_escudo_eq1": "https://lh5.googleusercontent.com/proxy/kbMHZExdLqHtyRPhztMx0vXH8fE8YRtWvxCIWT7Nvqat9ycuu7gC9-FwcNVV14SGqlYMVBe4dxaDr4Y4L5Vmts3Q_KqV_SqDmTmbDnCQN1bZdVFgoFvFGaK0Wj6ghjD_43v_vEQ9luT5tAbPOTnS",
            "nombre_eq1": "Osasuna",
            "resultado_eq1": "2",
            "url_escudo_eq2": "https://www.estadiodeportivo.com/elementosWeb/gestionCajas/EDE/Image/escudo-Real-Betis-2012.jpg",
            "nombre_eq2": "Betis",
            "resultado_eq2": "1"
          },
          {
            "url_escudo_eq1": "https://fbi.cults3d.com/uploaders/25780881/illustration-file/81c4ae67-10ce-43e0-b379-f82817c5ecbe/Logo_Real_Madrid.svg.png",
            "nombre_eq1": "Real Madrid",
            "resultado_eq1": "3",
            "url_escudo_eq2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvirc5MWGSk-K90-R08ibMh4txAY0QPLCvDbRvZJfcMtcqu8qbqTU-95Ly8wOa2ClQNyq6Mdsxa88f8syQseM6XO1eQnU4pED4BoSX9Qn9w",
            "nombre_eq2": "Barcelona",
            "resultado_eq2": "1"
          },
          {
            "url_escudo_eq1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS679IsrCdr43pnXuPpLIqf-Q7q0FioBW6eig&s",
            "nombre_eq1": "Valencia",
            "resultado_eq1": "0",
            "url_escudo_eq2": "https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif",
            "nombre_eq2": "Athletic Bilbao",
            "resultado_eq2": "0"
          },
          {
            "url_escudo_eq1": "https://sevillafc.es/sites/default/files/styles/cuadrada_600x600/public/history/entities/escudosuizo.jpg?itok=kxf1CTrZ",
            "nombre_eq1": "Sevilla",
            "resultado_eq1": "2",
            "url_escudo_eq2": "https://lh6.googleusercontent.com/proxy/sa_SNIRXZFGoUjoNneAg43PTTHfArkkIpAbMta2ooVpfXRzx7QZGg9jRp-pkgLQoZalGxoIRwPxk4Z5CVenQVegKUpFGZAHdd2C_B-tGvjh5KQKfeVO-3DDr1-8bhzWh0J4Uqte5x4nOqdJ1zYNY_aAijQNi10mR4_ZFbQ",
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
        aCronica.setAttribute('href', "/" + partido.nombre_eq1 + partido.nombre_eq2 + "/");
        liCronica.appendChild(aCronica);
        lista.appendChild(liCronica)


        //Y ahora creamos el asi lo vivimos
        let liVivimos = document.createElement('li');
        let aVivimos = document.createElement('a');
        aVivimos.textContent = "Así lo vivimos";
        aVivimos.setAttribute('href', "/" + partido.nombre_eq1 + partido.nombre_eq2 + "/.asilovivimos.html");
        liVivimos.appendChild(aVivimos);
        lista.appendChild(liVivimos)


        //Al pasar por encima de las imagenes mostramos la lista. Esperamos 3 segundos para que desaparezca
        escudo1.addEventListener('mouseover', function(){
            lista.style.display = 'flex';
            lista.style.listStyle = 'none';
            lista.style.gap = '1rem';
        })

        escudo1.addEventListener('mouseout', function(){
            setTimeout(() => {
                lista.style.display = 'none';
            }, 3000);
        })

        escudo2.addEventListener('mouseover', function(){
            lista.style.display = 'flex';
            lista.style.listStyle = 'none';
            lista.style.gap = '2rem';
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