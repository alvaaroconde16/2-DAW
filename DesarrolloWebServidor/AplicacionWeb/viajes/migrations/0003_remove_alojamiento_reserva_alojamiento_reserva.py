# Generated by Django 5.1.2 on 2024-11-28 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('viajes', '0002_alter_reserva_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alojamiento',
            name='reserva',
        ),
        migrations.AddField(
            model_name='alojamiento',
            name='reserva',
            field=models.ManyToManyField(to='viajes.reserva'),
        ),
    ]
