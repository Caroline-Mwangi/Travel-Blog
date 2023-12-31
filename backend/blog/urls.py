from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

route = routers.DefaultRouter()
route.register("posts", views.PostView, basename="posts")
route.register("tips", views.TipView, basename="tips")
route.register("comments", views.CommentView, basename="comments")


urlpatterns = [
    path('', include(route.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
