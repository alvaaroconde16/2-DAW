/*Realizar un examen tipo test online de 2 preguntas con 4 respuestas (sólo se puede seleccionar 1). Cuando el usuario seleccione una respuesta, 
hacerle saber si es correcta o incorrecta y mostrar la respuesta correcta en un campo de texto aparte.*/

//Creamos la función para comprobar el resultado
function checkAnswer(question, correctAnswer){
    //Obtenemos la respuesta que ha seleccionado
    let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);

    //Obtenemos el feedback del que estamos hablando, si es de la primera pregunta o de la segunda
    let feedbackElement = document.getElementById(`feedback-${question}`);


    if (selectedAnswer.value == correctAnswer) {
        feedbackElement.textContent = "¡La respuesta es correcta!";
    } else {
        feedbackElement.textContent = "La respuesta es incorrecta :(";
    }
}