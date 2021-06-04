from django.http import HttpResponse
import requests


def index(request):
    return HttpResponse("Hello, its my first django experience.")


def detail(request, query):
    print(query)
    response = requests.get(
        'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDzVqmN6DGNhR6KqODvTCo3P1ZQu0HcXBM&part=snippet,contentDetails,statistics&forUsername=' + query)
    print(response.json())  # To print http response code
    return HttpResponse(response.text)
