class CommentsController < ApplicationController
  before_filter :get_parent

  def new 
    @comment = @@parent.comments.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @comment }
    end
  end

  def create
    comment = params[:comment]
    comment[:user_id] = session[:user_id]

    @comment = @@parent.comments.new(comment)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to taskium_url, notice: 'Thank you for commenting' }
        format.json { render json: @comment, status: :created, location: @comment }
      else
        format.html { render action: "new" }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  protected
  def get_parent
    if params[:post_id]
      @@parent = Post.find(params[:post_id]) 
    elsif params[:comment_id]
      @@parent = Comment.find(params[:comment_id])
    end
  end
end
