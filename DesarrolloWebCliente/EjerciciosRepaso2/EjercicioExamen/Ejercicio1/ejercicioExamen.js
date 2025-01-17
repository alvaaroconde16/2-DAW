document.addEventListener('DOMContentLoaded', functionDom)

function functionDom() {
    const noticias = [
        {titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1"},
        {titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2"},
        {titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3"},
    ]

    var imagen1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2X0fRVZkF5UuogIKHHc5Nf3o4D1By3wAeQ&s';
    var imagen2 = 'https://external-preview.redd.it/mYgFWkEcEFubD9oqZ2S8E12L80rdOXEbspns1EuAmzg.png?auto=webp&s=98e11d915b6a01f8cfb960e115badcd6f9999e34';

    let contenedor = document.getElementById('noticias');
    let contador = 1;

    noticias.forEach(noticia => {
        let divNoticia = document.createElement('div');
        divNoticia.setAttribute('id', 'noticia' + contador);
        contenedor.appendChild(divNoticia);

        let h1 = document.createElement('h1');
        h1.textContent = noticia.titular;
        divNoticia.appendChild(h1);

        let p = document.createElement('p');
        p.setAttribute('id', 'resumen' + contador);
        p.textContent = noticia.resumen;
        divNoticia.appendChild(p);

        let img = document.createElement('img');
        img.setAttribute('src', imagen1);
        img.setAttribute('name', 'mostrar');
        img.setAttribute('width', '30');
        divNoticia.appendChild(img);

        let h4 = document.createElement('h4');
        h4.setAttribute('style', 'display: none');
        h4.textContent = noticia.descripcion;
        divNoticia.appendChild(h4);


        img.addEventListener('click', () => {
            if (h4.style.display == 'none') {
                img.setAttribute('src', imagen2);
                h4.style.display = 'block';
            } else {
                img.setAttribute('src', imagen1);
                h4.style.display = 'none';
            }
        });

        contador++;
    });
}