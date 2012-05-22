class AdminController < ApplicationController
  def index
    @user = User.find(session[:user_id])
    @homeworks = @user.homeworks

    if @user.group
      @groupers = @user.group.users.select {|user| user.id != @user.id}
    else
      @groupers = []
    end 
  end
end
