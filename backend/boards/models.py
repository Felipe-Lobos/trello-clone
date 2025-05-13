from django.db import models

# Create your models here.
class Board(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name


class List(models.Model):
    board = models.ForeignKey(Board, related_name='lists', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    position = models.IntegerField()
    
    def __str__(self):
        return self.title

class Card(models.Model):
    list = models.ForeignKey(List,related_name='cards',on_delete=models.CASCADE)
    content = models.TextField()
    position = models.IntegerField()
    
    def __str__(self):
        return self.content