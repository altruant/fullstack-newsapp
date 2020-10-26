from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):

    author = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Article
        fields = ('id', 'title', 'body', 'image_url', 'stage', 'categories', 'created', 'modified', 'author', 'isTopNews')
