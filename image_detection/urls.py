from django.urls import path, include

from image_detection.views import ImageHistoryView

urlpatterns = [
    path('cat_or_dog_image/', ImageHistoryView.as_view()),
]
