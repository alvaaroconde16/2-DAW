from django.db import models
from django.utils import timezone

class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    correo = models.EmailField(max_length=200, unique=True)
    contrasenya = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(default=timezone.now)

#----------------------------------------------------------------------------------------------------------------------------------------------------------

class Proyecto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    duracion_estimada = models.FloatField()
    fecha_inicio = models.DateField(default=timezone.now)
    fecha_fin = models.DateField(default=timezone.now)

    #Relación Usuario con Proyecto. Un usuario puede estar asignado a varios proyectos como colaborador. Y un proyecto puede tener varios usuarios.
    colaboradores = models.ManyToManyField(Usuario, related_name="colaboradores")

    #Relacion con Usuario. Un proyecto tiene un usuario que lo crea o administra.
    administrador = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="administrador")
    

#----------------------------------------------------------------------------------------------------------------------------------------------------------

class Tarea(models.Model):
    ESTADOS_OPCIONES = [
        ('Pendiente', 'Pendiente'),
        ('Progreso', 'Progreso'),
        ('Completada', 'Completada'),
    ]

    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    prioridad = models.IntegerField()
    estado = models.CharField(max_length=20, choices=ESTADOS_OPCIONES, default='Pendiente')
    completada = models.BooleanField(default=False)
    fecha_creacion = models.DateField(default=timezone.now)
    hora_vencimiento = models.TimeField()

    #Relación con Usuario. Muchas tareas pueden ser creadas por un usuario.
    creador = models.ForeignKey(Usuario, related_name="creador", on_delete=models.CASCADE)

    #Relación con Usuario. Una tarea puede tener asignado uno o más usuarios, y un usuario puede estar asignador en varias tareas, por lo tanto vamos a 
    #relacionarlos a través de una tabla intermedia Asignación de Tareas.
    usuarios = models.ManyToManyField(Usuario, through="AsignacionTarea", related_name="usuarios") 

    #Relación con Proyecto. Un proyecto tiene varias tareas creadas, para desarrollar un proyecto.
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)

#----------------------------------------------------------------------------------------------------------------------------------------------------------

class Etiqueta(models.Model):
    nombre = models.CharField(max_length=200, unique=True)
    
    #Relacion Tarea con Tarea. Una tarea puede tener varias etiquetas. Y una etiqueta puede estar asignada a varias tareas.
    tareas = models.ManyToManyField(Tarea)

#----------------------------------------------------------------------------------------------------------------------------------------------------------

class AsignacionTarea(models.Model):
    observaciones = models.TextField()
    fecha_asignacion = models.DateTimeField(default=timezone.now)

    #Esta es la clave foránea de la tabla Usuario.
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    #Esta es la clave foránea de la tabla Tarea.
    tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE)

#----------------------------------------------------------------------------------------------------------------------------------------------------------

class Comentario(models.Model):
    contenido = models.TextField()
    fecha_comentario = models.DateTimeField(default=timezone.now)

    #Relación con Usuario. Cada comentario tiene un autor.
    autor = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    #Relación con Tarea. Cada comentario está asociado a una tarea.
    tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE)
