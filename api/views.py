from django.shortcuts import render
from usuarios.models import CustomUser
from rest_framework import viewsets
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

