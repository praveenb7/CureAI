from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('base', views.base_view, name='base'),
    path('about', views.aboutus_view, name='aboutus'),
    path('trynow', views.trynow_view, name='trynow'),
    path('upload', views.upload_view, name='upload'),
    path('register', views.register_view, name='register'),
    path('login', auth_views.LoginView.as_view(template_name='main/login.html'), name='login'),
    path('logout', auth_views.LogoutView.as_view(template_name='main/logout.html'), name='logout'),
    path('dashboard', views.dashboard_view, name='dashboard'),
]