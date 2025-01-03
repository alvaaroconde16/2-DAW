# Generated by Django 5.1.4 on 2024-12-12 09:09

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('examen', '0002_promocion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promocion',
            name='descripcion',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='promocion',
            name='descuento',
            field=models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(10)]),
        ),
    ]
