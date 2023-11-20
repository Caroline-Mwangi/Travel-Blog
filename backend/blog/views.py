# from django.shortcuts import render
# from django.http import HttpResponse
from .models import Post, Tip,Comment
from .serializers import PostSerializer, TipSerializer, CommentSerializer
from rest_framework import viewsets

# Create your views here.
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class TipView(viewsets.ModelViewSet):
    queryset = Tip.objects.all()
    serializer_class = TipSerializer
    
class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
