from django.db import models


class ImageHistory(models.Model):
    IMAGE_CHOICES = (
        ('CAT','cat'),
        ('DOG','dog')
    )
    image_type = models.CharField(max_length=20, choices=IMAGE_CHOICES)
    image = models.ImageField(upload_to='dog_or_cat_images')
    accuracy = models.FloatField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.image_type}"