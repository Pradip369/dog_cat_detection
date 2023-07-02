from django.contrib import admin
from image_detection.models import ImageHistory


# Register your models here.
@admin.register(ImageHistory)
class ImageHistoryAdmin(admin.ModelAdmin):
    list_display = ['id','image_type','image','accuracy','created_date']
    list_filter = ['image_type','created_date']
    list_display_links = list_display
