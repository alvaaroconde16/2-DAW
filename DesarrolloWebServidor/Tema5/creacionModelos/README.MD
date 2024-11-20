ESTOS SON LOS 5 TEMPLATE TAGS QUE HE UTILIZADO:

1. **`FOR...EMPTY`**: Se utiliza para iterar sobre listas u objetos. Si la lista está vacía, se ejecuta el bloque `{% empty %}`.  
   - En `tareas.html`, `completadas.html`, `usuarios.html` y `usuariosSinTarea.html`, si no hay elementos para iterar, mostramos un mensaje de que no hay elementos disponibles:
    
    {% for tarea in tarea_mostrar %}
        {% include 'tarea/tarea_item.html' %}
    {% empty %}
        <p>No hay tareas</p>
    {% endfor %}
    


2. **`INCLUDE`**: Permite incluir el contenido de otro archivo HTML dentro de la plantilla actual.  
   - En todas las plantillas que contienen un bucle `for`, como en `lista.html`, `proyecto_item.html`, `usuario_item.html`, se utiliza para incluir fragmentos de código común o archivos parciales, como una barra de navegación:
    
    {% include 'proyecto/proyecto_item.html' %}
    


3. **`IF-ELSE`**: Se utiliza para mostrar información condicionalmente, permitiendo una lógica de tipo `if-else` en las plantillas.  
   - En `tarea_item.html`, se usa para verificar si una tarea está completada o no:
    
    {% if tarea.estado == 'Completada' %}
        La tarea ya está completada.
    {% else %}
        La tarea aún falta por completar.
    {% endif %}


4. **`FORLOOP.COUNTER`**: Muestra el número de la iteración actual dentro de un bucle `for`.  
   - En `proyecto_item.html` y `tarea_item.html`, se utiliza para mostrar el número de cada ítem listado, mostrando la posición en el bucle:
    
    <p>Ítem número: {{ forloop.counter }}</p>
    


5. **`COMMENT...ENDCOMMENT`**: Permite agregar comentarios dentro de la plantilla que no se muestran en el HTML renderizado.  
   - En `tarea_item.html`, se utiliza para agregar comentarios explicativos dentro del código de las plantillas sin que estos aparezcan en el resultado final visible al usuario:
    
    {% comment %}
        Este bloque de código es solo para mostrar los detalles de la tarea
        y no se mostrará en el HTML renderizado.
    {% endcomment %}



# #########################################################################################################################################################################

<br><br>ESTOS SON LOS 5 OPERADORES QUE HE UTILIZADO:
    
1. **`==` (Igual que)**: Se utiliza para comparar si dos valores son iguales.  
   - En `tarea_item.html`, se usa para verificar si el estado de la tarea es "Completada":
   
     <p>Estado: {% if tarea.estado == 'Completada' %}
                    La tarea ya está completada.
                {% else %}
                    La tarea aún falta por completar.
                {% endif %} 



2. **`!=` (Distinto de)**: Se utiliza para comparar si dos valores no son iguales.  
   - En `observaciones.html`, se usa para verificar si el estado de la tarea no es "Completada":
    
    {% if asignacionesTareas.tarea.estado != 'Completada' %}
        <p>La tarea aún no está completada.</p>
    {% else %}
        <p>La tarea ya está completada.</p>
    {% endif %}



3. **`>=` (Mayor o igual que)**: Se utiliza para comparar si un valor es mayor o igual a otro.  
   - En `observaciones.html`, se usa para verificar si la prioridad de la tarea es mayor o igual a 3:
    
    {% if tarea.prioridad >= 3 %}
        <p>Esta tarea tiene una alta prioridad.</p>
    {% else %}
        <p>Esta tarea tiene una baja prioridad.</p>
    {% endif %}
    


4. **`>` (Mayor que)**: Se utiliza para comparar si un valor es mayor que otro.  
   - En `tarea_item.html`, se usa para verificar si la prioridad de la tarea es mayor a 0:
    
    {% if tarea.prioridad > 0 %}
        <p>Esta tarea tiene una alta prioridad.</p>
    {% else %}
        <p>Esta tarea tiene una baja prioridad.</p>
    {% endif %}
    


5. **`<` (Menor que)**: Se utiliza para comparar si un valor es menor que otro.  
   - En `usuario_item.html`, se usa para verificar si la fecha de registro del usuario es anterior a la fecha actual (`today`):
    
    {% if usuario.fecha_registro < today %}
        <p>Este usuario ha sido registrado antes de hoy.</p>
    {% else %}
        <p>Este usuario ha sido registrado hoy o después.</p>
    {% endif %}

# #########################################################################################################################################################################

<br><br>ESTOS SON LOS 10 TEMPLATES FILTER QUE HE UTILIZADO:

1. **`lower`**: Convierte una cadena de texto a minúsculas.  
   - En `proyecto_item.html`, se utiliza para mostrar el nombre del proyecto en minúsculas:
    
    <h2>Nombre: {{ proyecto.nombre|lower }}</h2>
    

2. **`floatformat`**: Da formato a un número de punto flotante con un número específico de decimales.  
   - En `proyecto_item.html`, se usa para mostrar la duración estimada del proyecto con dos decimales:
    
    <p>Duración estimada: {{ proyecto.duracion_estimada|floatformat:2 }}</p>
    

3. **`date`**: Da formato a una fecha según el formato proporcionado.  
   - En `tarea_item.html`, se utiliza para mostrar la fecha de creación de la tarea en el formato `d-m-Y`:
    
    <p>Fecha de creación: {{ tarea.fecha_creacion|date:"d-m-Y" }} </p>
    

4. **`yesno`**: Convierte un valor booleano en un texto legible con dos opciones.  
   - En `tarea_item.html`, se utiliza para mostrar si la tarea está completada con "Sí" o "No":
    
    <p>Completada: {{ tarea.completada|yesno:"Sí,No" }} </p>
    

5. **`default`**: Proporciona un valor predeterminado si el valor es `None` o vacío.  
   - En `tarea_item.html`, se utiliza para mostrar una descripción predeterminada si no existe una descripción para la tarea:
    
    <p>Descripcion: {{ tarea.descripcion|default:"Sin descripción disponible." }}</p>
    

6. **`truncatechars`**: Trunca una cadena a una cantidad de caracteres especificada.  
   - En `usuario_item.html`, se utiliza para truncar el nombre del usuario a 50 caracteres:
    
    <h2>Usuario: {{ usuario.nombre|truncatechars:50|capfirst }}</h2>
    

7. **`upper`**: Convierte una cadena de texto a mayúsculas.  
   - En `usuario_item.html`, se utiliza para mostrar el correo del usuario en mayúsculas:
    
    <p>Correo: {{ usuario.correo|upper }}</p>
    

8. **`pluralize`**: Se utiliza para agregar la forma plural o singular de una palabra.  
   - En `usuarios.html`, se usa para mostrar el número de usuarios en singular o plural:
    
    <h2>Numero de usuarios: {{ asignacion_mostrar|length }} usuario{{ asignacion_mostrar|pluralize }}</h2>
    

9. **`length`**: Muestra la longitud de una lista u objeto.  
   - En `tareas.html`, se utiliza para mostrar la cantidad de tareas completadas:
    
    <h2>Total de tareas completadas: {{ completadas|length }}</h2>
    

10. **`capfirst`**: Capitaliza el primer carácter de una cadena de texto.  
   - En `usuario_item.html`, se utiliza para mostrar el nombre del usuario con la primera letra en mayúsculas:
    
    <h2>Usuario: {{ usuario.nombre|truncatechars:50|capfirst }}</h2>
    
