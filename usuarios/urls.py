from django.urls import path
from .views import SignUpView
from django.views.generic.base import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='usuario.html'), name='usuario'),
    path('signup/', SignUpView.as_view(), name='signup'),
]