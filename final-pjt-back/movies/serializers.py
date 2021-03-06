from rest_framework import serializers

from .models import Movie, Review, Like, Comment
from accounts.models import User




class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    # review_set = ReviewSerializer(read_only=True, many=True)
    class Meta:
        model = Movie
        fields = '__all__'

class MovieItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('pk', )



# Comment / Like


class CommentSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = ('pk', 'user', 'content', 'review',)
        read_only_fields = ('review', )



class LikeSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    class Meta:
        model = Like
        fields = ('review', 'user')



# review
class ReviewListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username', )

    user = UserSerializer(read_only=True)
    comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta:
        model = Review
        fields = ('pk', 'user', 'title', 'content', 'comment_count', 'like_count','created_at',)

class ReviewSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    movie = MovieItemSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    like_users = UserSerializer(read_only=True, many=True)
    
    class Meta:
        model = Review
        fields = ('pk', 'title',  'content', 'movie', 'user', 'comments', 'like_users')


class CommentListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('pk', 'user', 'content', 'review_id')