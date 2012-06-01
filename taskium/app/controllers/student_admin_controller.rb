class StudentAdminController < ApplicationController

  layout :set_layout

  def index
    @user = User.find(session[:user_id])
    @homeworks = @user.homeworks
    @tasks = Task.order('due DESC')

    if @user.group
      @groupers = @user.group.users.select {|user| user.id != @user.id}
    end 
  end
end
