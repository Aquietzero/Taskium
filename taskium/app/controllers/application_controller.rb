class ApplicationController < ActionController::Base
  before_filter :authorize
  before_filter :set_user
  before_filter :set_group_due_date

  protect_from_forgery
  
  protected
  def authorize
    unless session[:user_id]
      redirect_to login_url, :notice => 'Please login first!'
    end 
  end

  def set_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
  end

  def set_group_due_date
    @group_due_date = GroupDueDate.find(1)
  end

  def set_layout
    if @user 
      if @user.role == 'TEACHER' or @user.role == 'ADMIN'
        'admin_layout'
      elsif @user.role == 'STUDENT'
        'student_layout'
      end 
    else
      'application' 
    end 
  end

end
