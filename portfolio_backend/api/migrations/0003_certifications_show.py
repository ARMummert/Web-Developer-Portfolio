# Generated by Django 4.1.5 on 2024-01-19 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_achievements_certifications_education_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='certifications',
            name='show',
            field=models.BooleanField(default=True),
        ),
    ]
