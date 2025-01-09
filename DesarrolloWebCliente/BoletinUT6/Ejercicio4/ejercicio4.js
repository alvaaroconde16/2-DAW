document.addEventListener('DOMContentLoaded', get_fortune)

function get_fortune(){
    let hoy = new Date();
    let dichos = [
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", 
        "Una manzana al día, mantiene al doctor en la lejanía.", 
        "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", 
        "No te conformes con la mediocridad, pelea por el éxito", 
        "Vive y deja vivir."
    ];

    let n = dichos.length;
    let numero = Math.floor(Math.random()*n);
    
    let divdicho = document.getElementById('divdicho');

    let texto_fecha = document.createTextNode('Hoy es: ' + hoy + '.');

    let salto1 = document.createElement('br');
    let salto2 = document.createElement('br');

    let texto_suerte = document.createTextNode('Hoy la suerte te dice: ');

    let salto3 = document.createElement('br');
    let salto4 = document.createElement('br');

    let em = document.createElement('em');
    let texto_dicho = document.createTextNode(dichos[numero]);
    em.appendChild(texto_dicho);

    divdicho.appendChild(texto_fecha)
    divdicho.appendChild(salto1)
    divdicho.appendChild(salto2)
    divdicho.appendChild(texto_suerte)
    divdicho.appendChild(salto3)
    divdicho.appendChild(salto4)
    divdicho.appendChild(em)
}