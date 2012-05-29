class SessionsController < ApplicationController

  layout 'session_layout'
  skip_before_filter :authorize

  def new
  end

  def create
    if user = User.authenticate(params[:name], params[:password])
      session[:user_id] = user.id
      user = User.find(user.id)
      redirect_to admin_url if user.role == 'TEACHER' or user.role == 'ADMIN'
      redirect_to student_admin_url if user.role == 'STUDENT' or user.role == 'MANAGER'
    else
      redirect_to login_url, :alert => "Invalid name/password combination!"
    end 
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_url, :notice => "You have been successfully logout!"
  end
end
