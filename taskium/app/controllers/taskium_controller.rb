class TaskiumController < ApplicationController

  layout :set_layout
  skip_before_filter :authorize

  def index
    @posts = Post.all
    @categories = Category.all
    @tags = Tag.all
  end
end
