class TaskiumController < ApplicationController
  def index
    @posts = Post.all
  end
end
