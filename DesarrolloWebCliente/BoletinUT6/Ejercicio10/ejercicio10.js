document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    let contenedor = document.getElementById('coordenadas');
    let textoCoordenadas = document.getElementById('texto-coordenadas');

    document.addEventListener('mousemove', function (event){
        let x = event.clientX;
        let y = event.clientY;

        textoCoordenadas.textContent = `Coordenadas: X = ${x}, Y = ${y}`
    })
}