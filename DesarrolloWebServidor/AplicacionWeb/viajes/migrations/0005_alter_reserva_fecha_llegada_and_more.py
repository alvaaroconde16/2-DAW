# Generated by Django 5.1.2 on 2024-12-11 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('viajes', '0004_alter_reserva_fecha_llegada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='fecha_llegada',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='fecha_salida',
            field=models.DateTimeField(),
        ),
    ]
