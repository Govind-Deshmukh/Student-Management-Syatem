from distutils.command.upload import upload
from django.db import models


class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(unique=True, max_length=100)
    name = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'admin'