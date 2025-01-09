window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("enlace").addEventListener('click', function (event){
        event.preventDefault();

        let x = event.clientX;
        let y = event.clientY;

        let coordenadas = document.getElementById('coordenadas');
        coordenadas.textContent = `Coordenadas: X = ${x}, Y = ${y}`;

        let capa = document.getElementById('capa');
        capa.style.display = 'block';
    })
}
