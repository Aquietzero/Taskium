class TaskiumController < ApplicationController
  skip_before_filter :authorize

  def index
    @posts = Post.all
    @categories = Category.all
    @tags = Tag.all
  end
end
