# Generated by Django 4.0.2 on 2022-03-01 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0003_alter_userprofile_awards_won_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='about_me_image',
            field=models.ImageField(default='about-me-image/default.png', upload_to='about-me-image/'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='contact_form_image',
            field=models.ImageField(default='contact-form-image/default.png', upload_to='contact-form-image/'),
        ),
    ]
