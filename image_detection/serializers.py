from rest_framework import serializers

from image_detection.models import ImageHistory


class ImageHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ImageHistory
        fields = "__all__"
