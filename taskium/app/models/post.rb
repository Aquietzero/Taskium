class Post < ActiveRecord::Base
  belongs_to :category
  has_and_belongs_to_many :tags

  has_many :comments, :as => :commentable
end
