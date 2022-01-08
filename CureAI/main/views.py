from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Prediction
from django.contrib import messages
from .forms import UserRegisterForm

def base_view(request):
    return render(request, 'main/base.html')

def index_view(request):
    return render(request, 'main/index.html')

def aboutus_view(request):
    return render(request, 'main/about.html')

def trynow_view(request):
    if(request.user.is_authenticated):
        return redirect('dashboard')
    return redirect('login')

def upload_view(request):
    if(request.user.is_authenticated):
        return render(request, 'main/upload.html')
    return redirect('login')
    

def register_view(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'main/register.html', {'form': form})



def dashboard_view(request):
    if(request.user.is_authenticated):
        pred = Prediction.objects.all().order_by('-date')
        return render(request, 'main/dashboard.html', {'predictions':pred})
    return redirect('login')