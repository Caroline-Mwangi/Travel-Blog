from django.contrib import admin
from .models import Post, Tip, Comment

# Register your models here.
admin.site.register(Post)
admin.site.register(Tip)
admin.site.register(Comment)
