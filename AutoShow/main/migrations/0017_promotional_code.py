# Generated by Django 4.1.9 on 2023-09-14 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_review_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promotional_code',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.TextField(help_text='Enter promocode')),
            ],
        ),
    ]
