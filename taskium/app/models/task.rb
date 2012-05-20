class Task < ActiveRecord::Base
  has_many :comments, :as => :commentable
  has_many :homeworks
end
