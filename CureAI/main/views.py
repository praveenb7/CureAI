from django.shortcuts import render

def index_view(request):
    return render(request, 'main/index.html')

def aboutus_view(request):
    return render(request, 'main/about.html')

def upload_view(request):
    return render(request, 'main/upload.html')