class Comment < ActiveRecord::Base
  belongs_to :post, :polymorphic => true
  belongs_to :task, :polymorphic => true
  belongs_to :user
  has_many :comments, :as => :commentable

  def post
    commentable.is_a?(Post) ? commentable : commentable.post
  end

  def task 
    commentable.is_a?(Task) ? commentable : commentable.task
  end
end
