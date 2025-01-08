document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    // Crear un nodo <p>
    let para = document.createElement('p');

    // Crear un nodo de texto para el primer fragmento ("Este es el")
    let txt1 = document.createTextNode('Este es el ');
    para.appendChild(txt1);

    // Crear un nodo <em>
    let enfasis = document.createElement('em');

    // Crear un nodo de texto para el contenido en el <em> ("contenido")
    let txt2 = document.createTextNode('contenido');
    enfasis.appendChild(txt2)
    
    // Añadir el <em> al nodo <p>
    para.appendChild(enfasis)

    // Crear un nodo de texto para el final del párrafo (" de mi párrafo")
    let txt3 = document.createTextNode(' de mi párrafo');
    para.appendChild(txt3)

    // Añadir el nodo <p> al div con id "testdiv"
    let testdiv = document.getElementById('testdiv');
    testdiv.appendChild(para)
}