class TaskiumController < ApplicationController
  def index
    @posts = Post.all
    @categories = Category.all
    @tags = Tag.all
  end
end
