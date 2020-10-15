from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializer.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'body', 'categories', 'created', 'modified', 'image_url')
