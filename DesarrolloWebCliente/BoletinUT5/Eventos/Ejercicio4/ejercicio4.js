/*Realizar un examen tipo test online de 2 preguntas con 4 respuestas (sólo se puede seleccionar 1). Cuando el usuario seleccione una respuesta, 
hacerle saber si es correcta o incorrecta y mostrar la respuesta correcta en un campo de texto aparte.*/
window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById('q1').addEventListener('check', checkAnswer)
    document.getElementById('q2').addEventListener('check', checkAnswer)
}


//Creamos la función para comprobar el resultado
function checkAnswer(){
    


    if (selectedAnswer.value == correctAnswer) {
        feedbackElement.textContent = "¡La respuesta es correcta!";
    } else {
        feedbackElement.textContent = "La respuesta es incorrecta :(";
    }
}