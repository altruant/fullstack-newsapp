from django.db import models
from django.utils import timezone
# Create your models here.
class Article(models.Model):
    CATEGORIES_CHOICES = (
        ('election', 'Election 2020'),
        ('US', 'US News'),
        ('world', 'Worlds News'),
        ('entertainment', 'Entertainment'),
        ('tech', 'Technology'),
    )
    title = models.CharField(max_length=255)
    body = models.TextField()
    image_url = models.URLField(max_length=255, null=True)
    categories = models.CharField(max_length=15, choices=CATEGORIES_CHOICES, default=None)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
