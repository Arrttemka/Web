# Generated by Django 4.2.1 on 2023-06-02 23:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_rename_carcass_car_carcass_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='purchase_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
