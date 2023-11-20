from django.db import models

# Create your models here.
class Post(models.Model):
    image = models.ImageField(upload_to='uploads/posts', null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    date = models.DateField(auto_now_add=True)
    continent = models.CharField(max_length=200, null=False, blank=False)
    location = models.CharField(max_length=200, null=False, blank=False)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title
    
class Tip(models.Model):
    image = models.ImageField(upload_to='uploads/posts', null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title