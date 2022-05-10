from django.urls import path
from . import views
from .routes import admin



urlpatterns = [
    path('home/', views.index, name='index'),
    path("admin/", admin.admin, name="admin"),
    path("admin/<int:id>/", admin.AdminID, name='AdminID'),    
]