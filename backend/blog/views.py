# from django.shortcuts import render
# from django.http import HttpResponse
from .models import Post, Tip,Comment
from .serializers import PostSerializer, TipSerializer, CommentSerializer
from rest_framework import viewsets


# Create your views here.
class PostView(viewsets.ModelViewSet):
    
    serializer_class = PostSerializer
    
    def get_queryset(self):
        continent = self.request.query_params.get('continent', None)
        queryset = Post.objects.all()
        
        if continent:
            queryset = queryset.filter(continent=continent)
        return queryset
    
class TipView(viewsets.ModelViewSet):
    queryset = Tip.objects.all()
    serializer_class = TipSerializer
    
class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
