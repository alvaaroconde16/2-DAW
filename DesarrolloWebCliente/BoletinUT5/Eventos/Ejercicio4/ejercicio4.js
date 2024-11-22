/*Realizar un examen tipo test online de 2 preguntas con 4 respuestas (sólo se puede seleccionar 1). Cuando el usuario seleccione una respuesta, 
hacerle saber si es correcta o incorrecta y mostrar la respuesta correcta en un campo de texto aparte.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("quiz-form").reset();
    
    let preguntas = document.querySelectorAll('input[type="radio"]')

    preguntas.forEach(function(pregunta){
        pregunta.addEventListener("click", function(){
            validarRespuesta(pregunta)
        })
    })
}


function validarRespuesta(pregunta){
    const respuestasCorrectas = {
        pregunta1: 'b',  // Correcta: París
        pregunta2: 'c',  // Correcta: 7
    };

    let resultadoId = "resultado-" + pregunta.name;
    let resultado = document.getElementById(resultadoId);

    if (respuestasCorrectas[pregunta.name] == pregunta.value) {
        resultado.textContent = "¡La respuesta es correcta!"
    } else {
        resultado.textContent = "La respuesta es incorrecta :("        
    }
}
