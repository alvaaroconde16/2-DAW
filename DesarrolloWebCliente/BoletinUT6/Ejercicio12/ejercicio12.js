window.addEventListener("load", inicializar)

function inicializar(){
    let perseguidor = document.getElementById('perseguidor')
    
    document.addEventListener('mousemove', function(event){
        let x = event.clientX;
        let y = event.clientY;

        perseguidor.style.transform = `translate(${x}px, ${y}px)`;
    })
}