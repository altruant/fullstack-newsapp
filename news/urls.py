from django.urls import path, include

from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('<int:pk>/', ArticleDetailView.as_view()),
    path('', ArticleListView.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
