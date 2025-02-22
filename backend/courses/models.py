from django.db import models


# Create your models here.

class Courses(models.Model):
    courseID = models.AutoField(auto_created=True, primary_key=True)
    courseName = models.TextField(max_length=32, blank=False)
    shortDescription = models.TextField(max_length=80, default=courseName)
    longDescription = models.TextField(max_length=2000, default=shortDescription)
    likeRatio = models.IntegerField()

    class Meta:
        ordering = ['courseID']
