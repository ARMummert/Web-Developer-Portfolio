# Generated by Django 4.1.5 on 2024-02-05 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_otherproject_proj_lang_project_proj_lang'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=250)),
                ('video', models.FileField(blank=True, null=True, upload_to='media/')),
                ('show', models.BooleanField(default=True)),
            ],
        ),
    ]
