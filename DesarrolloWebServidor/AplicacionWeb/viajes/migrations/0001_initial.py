# Generated by Django 5.1.2 on 2024-11-26 08:53

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Destino',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('pais', models.CharField(max_length=50)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('popularidad', models.FloatField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
            ],
        ),
        migrations.CreateModel(
            name='Extra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('tipo', models.CharField(choices=[('actividad', 'Actividad'), ('guia', 'Guía Turístico'), ('transporte', 'Transporte Adicional'), ('comida', 'Comida Especial'), ('seguro', 'Seguro')], max_length=50)),
                ('descripcion', models.TextField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_reserva', models.CharField(max_length=20)),
                ('fecha_salida', models.DateTimeField()),
                ('fecha_llegada', models.DateTimeField()),
                ('numero_personas', models.PositiveIntegerField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200, verbose_name='Nombre Completo')),
                ('correo', models.EmailField(max_length=254)),
                ('telefono', models.CharField(max_length=20)),
                ('edad', models.IntegerField()),
                ('contraseña', models.CharField(max_length=200)),
                ('fecha_registro', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Alojamiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('direccion', models.CharField(max_length=200)),
                ('capacidad', models.IntegerField()),
                ('tipo', models.CharField(max_length=50)),
                ('destino', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='viajes.destino')),
                ('reserva', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='viajes.reserva')),
            ],
        ),
        migrations.CreateModel(
            name='Promocion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('descuento_porcentaje', models.FloatField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('fecha_inicio', models.DateField()),
                ('fecha_fin', models.DateField()),
                ('activo', models.BooleanField(default=True)),
                ('alojamiento', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='viajes.alojamiento')),
                ('destino', models.ManyToManyField(to='viajes.destino')),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_factura', models.CharField(max_length=20, unique=True)),
                ('fecha_emision', models.DateField(auto_now_add=True)),
                ('coste', models.DecimalField(decimal_places=2, max_digits=10)),
                ('metodo_pago', models.CharField(choices=[('Tarjeta', 'Tarjeta'), ('Transferencia', 'Transferencia'), ('Efectivo', 'Efectivo')], max_length=50)),
                ('reserva', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='viajes.reserva')),
            ],
        ),
        migrations.CreateModel(
            name='ExtraReserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.PositiveIntegerField(default=1)),
                ('extra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='viajes.extra')),
                ('reserva', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='viajes.reserva')),
            ],
        ),
        migrations.AddField(
            model_name='extra',
            name='reserva',
            field=models.ManyToManyField(through='viajes.ExtraReserva', to='viajes.reserva'),
        ),
        migrations.CreateModel(
            name='Transporte',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(max_length=50)),
                ('capacidad', models.PositiveIntegerField()),
                ('disponible', models.BooleanField(default=True)),
                ('costo_por_persona', models.DecimalField(decimal_places=2, max_digits=8)),
                ('destino', models.ManyToManyField(to='viajes.destino')),
            ],
        ),
        migrations.AddField(
            model_name='reserva',
            name='usuario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='viajes.usuario'),
        ),
        migrations.CreateModel(
            name='Pasaporte',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.CharField(max_length=50, unique=True)),
                ('fecha_emision', models.DateField()),
                ('fecha_expiracion', models.DateField()),
                ('nacionalidad', models.CharField(max_length=50)),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='viajes.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('contenido', models.TextField()),
                ('fecha_comentario', models.DateTimeField(auto_now_add=True)),
                ('calificacion', models.FloatField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comentarios', to='viajes.usuario')),
            ],
        ),
    ]
