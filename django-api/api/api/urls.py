from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('videos/', include('youtube.urls')),
    path('admin/', admin.site.urls),
]
