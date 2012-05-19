class ApplicationController < ActionController::Base
  before_filter :authorize
  before_filter :set_user

  protect_from_forgery

  protected
  def authorize
    unless User.find(session[:user_id])
      redirect_to login_url, :notice => 'Please login first!'
    end 
  end

  def set_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
  end
end
