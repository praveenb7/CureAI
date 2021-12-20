from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('about', views.aboutus_view, name='aboutus'),
    path('upload', views.upload_view, name='upload'),
]