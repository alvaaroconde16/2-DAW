# Generated by Django 5.1.1 on 2024-10-18 11:57

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DatosClientes',
            new_name='DatosCliente',
        ),
        migrations.RemoveField(
            model_name='cliente',
            name='libros',
        ),
        migrations.AlterField(
            model_name='cliente',
            name='libros_preferidos',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='libros_preferidos', to='biblioteca.libro'),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='puntos',
            field=models.FloatField(db_column='puntos_biblioteca', default=5.0),
        ),
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_prestamo', models.DateTimeField(default=django.utils.timezone.now)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.cliente')),
                ('libro', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.libro')),
            ],
        ),
        migrations.AddField(
            model_name='cliente',
            name='libros_prestamos',
            field=models.ManyToManyField(related_name='libros_prestamo', through='biblioteca.Prestamo', to='biblioteca.libro'),
        ),
        migrations.DeleteModel(
            name='Prestamos',
        ),
    ]
