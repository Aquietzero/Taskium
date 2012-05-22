class HomeworkViewAndScoreController < ApplicationController

  def index
    @user = User.find(params[:user])
    @task = Task.find(params[:task])
    @homework = Homework.find_by_user_id_and_task_id(@user, @task)
  end

end
