# Generated by Django 4.2.1 on 2023-06-02 23:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main', '0005_rename_carcass_car_carcass_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.client')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
                'ordering': ('-created',),
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, max_digits=15)),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='main.car')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='order.order')),
            ],
        ),
    ]
