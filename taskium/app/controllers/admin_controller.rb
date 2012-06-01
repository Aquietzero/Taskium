class AdminController < ApplicationController

  layout :set_layout

  def index
    @tasks = Task.order('due DESC')
  end

end
