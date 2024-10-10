# Generated by Django 5.1.1 on 2024-10-10 10:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestor', '0003_asignaciontarea_asignacion_tarea_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentario',
            name='comentario_tarea',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gestor.tarea'),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='creador_proyecto',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gestor.usuario'),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='creador_tareas',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gestor.usuario'),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='tarea_proyecto',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gestor.proyecto'),
        ),
    ]