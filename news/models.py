from django.db import models
from django.utils import timezone
# Create your models here.
class Article(models.Model):
    CATEGORIES_CHOICES = (
        ('Election 2020', 'Election 2020'),
        ('US News', 'US News'),
        ('World News', 'Worlds News'),
        ('Entertainment', 'Entertainment'),
        ('Technology', 'Technology'),
    )
    title = models.CharField(max_length=255)
    body = models.TextField()
    image_url = models.URLField(max_length=255, null=True)
    categories = models.CharField(max_length=15, choices=CATEGORIES_CHOICES, default=None)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    isTopNews = models.BooleanField(default=False)

    def __str__(self):
        return self.title
