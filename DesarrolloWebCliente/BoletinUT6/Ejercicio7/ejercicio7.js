document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    //Creamos el link
    let link = document.createElement('button');

    //Asignamos los atributos al link
    link.setAttribute("href", "#");
    link.setAttribute("title", "Mostrar y ocultar la tabla");
    link.textContent = 'Mostrar tabla';
    link.style.display = "block";

    //Obtenemos el contenedor en el que meteremos el link
    let linkContainer = document.getElementById('link-container');
    linkContainer.appendChild(link);

//#####################################################################################################################################################################

    //Creamos el evento para cuando hagamos click en el boton
    let visible = false
    let table;

    link.addEventListener("click", function (){
        if (!visible) {
            table = createTable();
            visible = true
            link.textContent = "Ocultar tabla"
        } else {
            table.remove();
            visible = false
            link.textContent = "Mostrar tabla"
        }
    })

//#####################################################################################################################################################################

    //Creamos el div en el que vamos a introducir los atributos
    let attributesContainer = document.getElementById('attributes-container');

    
    //Obtenemos los atributos del enlace y mostrarlos en el div
    let href = link.getAttribute('href'); 
    let title = link.getAttribute('title');
    
    let hrefText = document.createElement('p');
    hrefText.textContent = `Href: ${href}`;
    attributesContainer.appendChild(hrefText);

    let titleText = document.createElement('p');
    titleText.textContent = `Title: ${title}`;
    attributesContainer.appendChild(titleText);

}



function createTable(){
    //Pasamos el div de la tabla del html
    let table_container = document.getElementById('table-container');

    //Creamos la tabla
    let tabla = document.createElement('table');
    tabla.style.borderCollapse = "collapse";


    //Hacemos el bucle para ir creando la tabla
    for (let i = 0; i <= 20; i++) {
        let fila = document.createElement('tr');

        //Creamos el segundo for aninado para ir creando las columnas
        for (let j = 0; j <= 20; j++) {
            let columna = document.createElement('td');
            let texto = document.createTextNode(`${i}, ${j}`)  //Le damos un texto a las columnas

            columna.style.border = "1px solid black";
            columna.style.padding = "5px";
            
            //Agregamos el texto a la columna
            columna.appendChild(texto)

            //Agregamos la columna a la fila
            fila.appendChild(columna)
        }

        //Agregamos esa fila a nuestra tabla
        tabla.appendChild(fila)
    }

    //Y por ultimo agregamos la tabla al div que va a contener la tabla
    table_container.appendChild(tabla)

    return tabla
}