/*Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, no debe permitir escribir más. 
Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres permitidos que le quedan al usuario para poder escribir.*/

window.addEventListener("load", inicializar)

function inicializar(){
    document.getElementById("smsForm").reset();
    document.getElementById('sms').addEventListener("input", contar)
    document.getElementById('boton').addEventListener("click", enviar)
}

/*function contar(){
    let textArea = document.getElementById('sms')
    let contador = document.getElementById('charCounter')
    let texto = textArea.value

    let permitido = /^[a-zA-Z0-9.,;:!()'"@#&%$€¡\s]*$/g;

    if (!permitido.test(texto)) {
        // Si hay caracteres no válidos, eliminarlos
        texto = texto.replace(/[^a-zA-Z0-9.,;:!()'"@#&%$€¡\s]/g, '');
        textArea.value = texto
    }

    // Actualizar contador de caracteres restantes
    let restantes = 145 - textArea.value.length;
    contador.textContent = "Caracteres restantes: " + restantes
}*/

function enviar(){
    //window.location.href = "mailto:alvaro16072004@gmail.com?subject=Este es el asunto&body=" + document.getElementById('sms').value;
    alert("Formulario enviado correctamente")
}


function contar(){
    let textArea = document.getElementById('sms')
    let contador = document.getElementById('charCounter')

    let permitido = /^[a-zA-Z0-9.,;:!()'"@#&%$€¡\s]*$/g;

    if (!permitido.test(textArea.value)) {
        // Si hay caracteres no válidos, eliminarlos
        textArea.value = textArea.value.replace(/[^a-zA-Z0-9.,;:!()'"@#&%$€¡\s]/g, '');
        textArea = textArea.value
        
        let restantes = 145 - textArea.length;
        contador.textContent = "Caracteres restantes: " + restantes
    } else {
        let restantes = 145 - textArea.value.length;
        contador.textContent = "Caracteres restantes: " + restantes
    }
}