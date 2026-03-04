from django.contrib import admin
from django.urls import path
from myapp.views import hello_api
urlpatterns = [
    path('admin/', admin.site.urls),
    path('myhello/', hello_api),
]
 
