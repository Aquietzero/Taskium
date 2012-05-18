class Comment < ActiveRecord::Base
  belongs_to :post, :polymorphic => true
  has_many :comments, :as => :commentable

  def post
    commentable.is_a?(Post) ? commentable : commentable.post
  end
end
