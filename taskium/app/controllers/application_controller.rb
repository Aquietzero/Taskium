class ApplicationController < ActionController::Base
  before_filter :authorize
  protect_from_forgery

  protected
  def authorize
    unless User.find(session[:user_id])
      redirect_to login_url, :notice => 'Please login first!'
    end 
  end
end
