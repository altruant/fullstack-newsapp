# Generated by Django 3.1.2 on 2020-10-21 13:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='article',
            name='stage',
            field=models.CharField(choices=[('Draft', 'Draft'), ('Submitted', 'Submitted'), ('Published', 'Published'), ('Rejected', 'Rejected')], max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='categories',
            field=models.CharField(choices=[('Election 2020', 'Election 2020'), ('US News', 'US News'), ('World News', 'Worlds News'), ('Entertainment', 'Entertainment'), ('Technology', 'Technology')], max_length=15),
        ),
    ]
