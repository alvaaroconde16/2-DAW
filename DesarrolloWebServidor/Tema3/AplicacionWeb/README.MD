A continuación se especifica en que consiste cada modelo, cada atributo y cada parámetro usado. Y el esquema de modelo entidad-relación.

1. Usuario
El modelo Usuario representa a los usuarios que se registran en la plataforma. Sus atributos son:

- nombre: Almacena el nombre completo del usuario. Es de tipo CharField con un máximo de 200 caracteres (max_length=200, verbose_name="Nombre Completo").
- correo: Es un campo de tipo EmailField donde se guarda el correo electrónico del usuario.
- telefono: Guarda el número de teléfono del usuario. Es un CharField con un máximo de 20 caracteres (max_length=20).
- edad: Este campo almacena la edad del usuario como un entero (IntegerField).
- contraseña: Es la contraseña que el usuario utiliza para acceder a la plataforma. También es un CharField con un máximo de 200 caracteres (max_length=200).
- fecha_registro: Fecha en la que el usuario se registró. Es de tipo DateField y puede ser nulo o estar en blanco (null=True, blank=True).



2. Destino
El modelo Destino guarda información sobre los destinos turísticos disponibles. Los atributos que tiene son:

- nombre: Es el nombre del destino turístico. Este campo es de tipo CharField con un máximo de 200 caracteres (max_length=200).
- pais: Guarda el nombre del país donde se encuentra el destino. Es de tipo CharField con un máximo de 50 caracteres (max_length=50).
- descripcion: Es una descripción opcional del destino. Se almacena como TextField y puede ser nulo o estar en blanco (null=True, blank=True).
- popularidad: Es un campo de tipo FloatField donde se almacena la calificación de popularidad del destino, que debe estar entre 0 y 5. Usa validadores MinValueValidator(0) y MaxValueValidator(5)



3. Reserva
El modelo Reserva guarda información sobre las reservas hechas por los usuarios. Los atributos son:

- codigo_reserva: Es un código único para identificar cada reserva, almacenado en un CharField con un máximo de 20 caracteres (max_length=20).
- fecha_salida: Fecha y hora de salida de la reserva, se guarda como DateTimeField.
- fecha_llegada: Fecha y hora de llegada de la reserva, también un DateTimeField.
- numero_personas: Guarda el número de personas incluidas en la reserva como un entero positivo (PositiveIntegerField).
- precio: Precio total de la reserva, almacenado en un campo de tipo DecimalField con un máximo de 10 dígitos, de los cuales 2 son decimales (max_digits=10, decimal_places=2).
- usuario: Relación one-to-one con el modelo Usuario, cada reserva está asociada a un único usuario (OneToOneField(Usuario, on_delete=models.CASCADE)).



4. Comentario
El modelo Comentario almacena los comentarios que los usuarios dejan sobre destinos o reservas. Los atributos son:

- titulo: Título del comentario, almacenado en un CharField con un máximo de 100 caracteres (max_length=100).
- contenido: El contenido del comentario, de tipo TextField.
- fecha_comentario: Fecha en la que se hizo el comentario, se almacena automáticamente con la fecha y hora actual (auto_now_add=True).
- calificacion: Calificación del comentario, es un FloatField que acepta valores entre 0 y 5, con los validadores correspondientes (MinValueValidator(0), MaxValueValidator(5)).
- usuario: Relación many-to-one con el modelo Usuario, ya que un usuario puede dejar varios comentarios, pero cada comentario pertenece a un único usuario (ForeignKey(Usuario, on_delete=models.CASCADE)).



5. Alojamiento
Este modelo almacena información sobre los alojamientos disponibles en cada destino. Sus atributos son:

- nombre: Nombre del alojamiento, se guarda en un CharField de hasta 200 caracteres (max_length=200).
- direccion: Dirección del alojamiento, es un CharField de hasta 200 caracteres (max_length=200).
- capacidad: Capacidad máxima de personas que el alojamiento puede recibir, es un entero (IntegerField).
- tipo: El tipo de alojamiento (hotel, apartamento, etc.), es un CharField de hasta 50 caracteres (max_length=50).
- destino: Relación many-to-one con el modelo Destino. Varios alojamientos pueden estar en un mismo destino, pero un alojamiento pertenece a un único destino (ForeignKey(Destino, on_delete=models.CASCADE)).
- reserva: Relación many-to-one con el modelo Reserva, donde un alojamiento puede estar en varias reservas (ForeignKey(Reserva, on_delete=models.CASCADE)).



6. Extra
El modelo Extra guarda los servicios o extras disponibles para las reservas. Sus atributos son:

- nombre: Nombre del extra, guardado en un CharField de hasta 100 caracteres (max_length=100).
- tipo: Tipo de extra (actividad, guía turístico, transporte, etc.). Usa un campo de tipo CharField con opciones predefinidas (choices=TIPOS_EXTRAS, max_length=50).
- descripcion: Descripción del extra, de tipo TextField.
- precio: Precio del extra, almacenado en un DecimalField con un máximo de 8 dígitos y 2 decimales (max_digits=8, decimal_places=2).
- reserva: Relación many-to-many con el modelo Reserva usando una tabla intermedia llamada ExtraReserva (ManyToManyField(Reserva, through="ExtraReserva")).



7. Pasaporte
El modelo Pasaporte guarda la información del pasaporte de los usuarios. Sus atributos son:

- numero: Número único del pasaporte, se guarda en un CharField de hasta 50 caracteres (max_length=50, unique=True).
- fecha_emision: Fecha de emisión del pasaporte, almacenada en un DateField.
- fecha_expiracion: Fecha de expiración del pasaporte, también es un DateField.
- nacionalidad: Nacionalidad del titular del pasaporte, es un CharField con un máximo de 50 caracteres (max_length=50).



8. Transporte
Este modelo guarda información sobre los transportes disponibles para los destinos. Los atributos son:

- tipo: Tipo de transporte (bus, avión, etc.), es un CharField de hasta 50 caracteres (max_length=50).
- capacidad: Capacidad máxima de personas que pueden viajar en el transporte, es un PositiveIntegerField.
- disponible: Indica si el transporte está disponible (BooleanField(default=True)).
- costo_por_persona: Precio por persona del transporte, se almacena en un DecimalField con un máximo de 8 dígitos y 2 decimales (max_digits=8, decimal_places=2).
- destino: Relación many-to-many con el modelo Destino (ManyToManyField(Destino)).



9. Promocion
El modelo Promocion guarda las promociones aplicables a destinos o alojamientos. Los atributos son:

- nombre: Nombre de la promoción, guardado en un CharField de hasta 100 caracteres (max_length=100).
- descripcion: Descripción de la promoción, almacenada en un TextField.
- descuento_porcentaje: Porcentaje de descuento aplicado, es un FloatField con validadores que limitan el valor entre 0 y 100 (MinValueValidator(0), MaxValueValidator(100)).
- fecha_inicio: Fecha de inicio de la promoción, se guarda en un DateField.
- fecha_fin: Fecha de fin de la promoción, también es un DateField.
- activo: Indica si la promoción está activa o no, es un campo de tipo BooleanField(default=True).
- alojamiento: Relación one-to-one con el modelo Alojamiento. Una promoción solo puede aplicarse a un único alojamiento (OneToOneField(Alojamiento, on_delete=models.CASCADE)).
- destino: Relación many-to-many con el modelo Destino, ya que una promoción puede estar en varios destinos (ManyToManyField(Destino)).



10. Factura
Este modelo almacena la información de las facturas de las reservas. Los atributos son:

- numero_factura: Número único de la factura, es un CharField con un máximo de 20 caracteres (max_length=20, unique=True).
- fecha_emision: Fecha de emisión de la factura, se guarda automáticamente con la fecha actual (auto_now_add=True).
- coste: El coste total de la factura, almacenado en un DecimalField con un máximo de 10 dígitos y 2 decimales (max_digits=10, decimal_places=2).
- metodo_pago: Método de pago, que puede ser 'Tarjeta', 'Transferencia' o 'Efectivo', usando el parámetro choices (choices=METODOS_PAGO, max_length=50).
- reserva: Relación one-to-one con el modelo Reserva, ya que cada factura está asociada a una única reserva (OneToOneField(Reserva, on_delete=models.CASCADE)).



11. ExtraReserva
Este es un modelo intermedio entre Extra y Reserva, que permite la relación many-to-many entre estos modelos. Los atributos son:

- reserva: Relación many-to-one con el modelo Reserva (ForeignKey(Reserva, on_delete=models.CASCADE)).
- extra: Relación many-to-one con el modelo Extra (ForeignKey(Extra, on_delete=models.CASCADE)).
- cantidad: Almacena la cantidad de un determinado "extra" que se está reservando en relación con una reserva. Es un campo de tipo PositiveIntegerField. Se establece un valor predeterminado de 1 (default=1) para manejar casos donde solo se añada una unidad del extra.



MODELO ENTIDAD RELACIÓN
![Imagen Modelo Entidad Relación](/Tema3/AplicacionWeb/assests//Entidad-relacion_DWS.drawio.png)