from rest_framework import generics
from image_detection.models import ImageHistory
from image_detection.serializers import ImageHistorySerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.throttling import AnonRateThrottle


class ImageHistoryView(generics.ListCreateAPIView):
    serializer_class = ImageHistorySerializer
    queryset = ImageHistory.objects.all().order_by('-id')
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['image_type', 'accuracy', 'created_date']
