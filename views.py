from django.shortcuts import render
from django.http import HttpResponse

def hello_api(request):
    my_name = request.GET.get('name',"CGU")

    return HttpResponse(f"Hello " + {my_name})
