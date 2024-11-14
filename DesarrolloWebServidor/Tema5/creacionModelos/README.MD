ESTOS SON LOS 5 TEMPLATE TAGS QUE HE UTILIZADO:

    - FOR...EMPTY: Se utiliza para iterar sobre listas o objetos. Si la lista está vacía, se ejecuta el bloque {% empty %}. Lo he usado en templates como
    tareas.hmtl, completadas.hmtl...

    - INCLUDE: Permite incluir el contenido de otro archivo HTML dentro de la plantilla actual. Lo he usado en todas las templates que tenian un for.
    
    - COMMENT...ENDCOMMENT: Utilizada para agregar comentarios dentro del código de la plantilla. Los comentarios no se muestran en el HTML renderizado, solo son visibles en el código fuente de la plantilla. Usado en tarea_item.html
    
    - FORLOOP.COUNTER: Para mostrar el número de la iteración actual del for. Usado en la template tarea_item.hmtl como contador.
    
    - IF-ELSE: Para mostrar información condicional (por ejemplo, si la tarea está completada o pendiente). Usada en la template tarea_item.hmtl para comprobar el estado de la tarea.

# #########################################################################################################################################################################

ESTOS SON LOS 5 OPERADORES QUE HE UTILIZADO:
    
    - LENGTH: Se utiliza para obtener la longitud de un objeto iterable (como una lista o queryset). Utilizado por ejemplo en lista.html o tareas.html
    
    - DEFAULT: Este operador se usa para establecer un valor por defecto si una variable no tiene valor (es None o vacía). Usado en tarea_item.html.
    
    - DATE: Permite formatear fechas de acuerdo con el formato especificado. Usado en tarea_item.html.
    
    - UPPER: Convierte un texto a mayúsculas. Usado en el template usuario_item.html.
    
    - LOWER: Convierte un texto a minúsculas. Usado en el template proyecto_item.html.

# #########################################################################################################################################################################

ESTOS SON LOS 10 TEMPLATES FILTER QUE HE UTILIZADO:

    - DATE: Formatear fechas.

        <p>Fecha de creación: {{ tarea.fecha_creacion|date:"d-m-Y" }} </p>


    - LENGTH: Obtener la cantidad de elementos de una lista.

        <p>Total de tareas completadas: {{ completadas|length }}</p>


    - DEFAULT: Establecer un valor predeterminado si el valor es vacío.

        <p>Descripcion: {{ tarea.descripcion|default:"Sin descripción disponible." }}</p>


    - UPPER: Convertir texto a mayúsculas.

        <p>Correo: {{ usuario.correo|upper }} </p>


    - LOWER: Convertir texto a minúsculas.

        <h2>Nombre: {{ proyecto.nombre|lower }}</h2>


    - YESNO: Mostrar valores personalizados para booleanos.

        <p>Completada: {{ tarea.completada|yesno:"Sí,No" }} </p>


    - TRUNCATECHARS: Limitar el texto a un número específico de caracteres.

        <h2>Usuario: {{ usuario.nombre|truncatechars:50 }} </h2>

    
    - PLURALIZE: Este filtro es perfecto para manejar plurales en conteos dinámicos.

        <p>Numero de usuarios: {{ asignacion_mostrar|length }} usuario{{ asignacion_mostrar|pluralize }}</p>


    - CAPFIRST: Convierte en mayúscula la primera letra.

        <h2>Usuario: {{ usuario.nombre|truncatechars:50|capfirst }} </h2>


    - FLOATFORMAT: Formatea números de punto flotante a un número fijo de decimales.

        <p>Duración estimada: {{ proyecto.duracion_estimada|floatformat:2 }}</p>