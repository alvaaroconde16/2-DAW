document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
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
}