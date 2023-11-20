from rest_framework import serializers
from .models import Post, Tip

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
class TipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = '__all__'