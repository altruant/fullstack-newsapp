from django.urls import path, include

from .views import ArticleListView, ArticleDetailView, UserArticleView

urlpatterns = [
    path('articles/user/<int:pk>/', ArticleDetailView.as_view()),
    path('', ArticleListView.as_view()),
    path('articles/user', UserArticleView.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

]
