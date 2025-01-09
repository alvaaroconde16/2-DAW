document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    //Creamos el link
    let link = document.createElement('a');

    //Asignamos los atributos al link
    link.setAttribute("href", "https://www.marca.com");
    link.setAttribute("target", "_blank");
    link.setAttribute("title", "Ir al sitio web de ejemplo");

    link.textContent = 'Haz click para visitar el link';

    //Obtenemos el contenedor en el que meteremos el link
    let linkContainer = document.getElementById('link-container');
    linkContainer.appendChild(link);


    //Creamos el div en el que vamos a introducir los atributos
    let attributesContainer = document.getElementById('attributes-container');

    let attributesTitle = document.createElement('h2');
    attributesTitle.textContent = "Atributos del enlace: ";

    attributesContainer.appendChild(attributesTitle);

    
    //Obtenemos los atributos del enlace y mostrarlos en el div
    let href = link.getAttribute('href'); 
    let target = link.getAttribute('target'); 
    let title = link.getAttribute('title');
    
    let hrefText = document.createElement('p');
    hrefText.textContent = `Href: ${href}`;
    attributesContainer.appendChild(hrefText);

    let targetText = document.createElement('p');
    targetText.textContent = `Target: ${target}`;
    attributesContainer.appendChild(targetText);

    let titleText = document.createElement('p');
    titleText.textContent = `Title: ${title}`;
    attributesContainer.appendChild(titleText);

}