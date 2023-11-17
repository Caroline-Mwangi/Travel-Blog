from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets

# Create your views here.
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
