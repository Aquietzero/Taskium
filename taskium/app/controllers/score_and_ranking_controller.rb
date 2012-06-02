class ScoreAndRankingController < ApplicationController

  layout :set_layout
  skip_before_filter :get_file_data
  skip_after_filter  :write_file

  def index
  end

  def manager_evaluation
    @task = Task.find(params[:task_id])
    @manager = User.find(session[:user_id])
    @groupers = @manager.group.users
  end

  def teacher_evaluation
    @task = Task.find(params[:task_id])
    @groups = Group.all
  end

  def calculate_group_rank
    @task = Task.find(params[:task_id])
    @manager = User.find(session[:user_id])
    @groupers = @manager.group.users

    @groupers.sort_by! do |grouper|
      homework = grouper.homeworks.find_by_task_id(@task.id)
      sum = 0
      if homework
        homework.groupscores.each do |groupscore|
          sum += groupscore.score
        end 
      end
      sum
    end
    @groupers.reverse!

    @groupers.each_with_index do |grouper, order|
      homework = grouper.homeworks.find_by_task_id(@task.id)
      homework.update_attribute(:group_rank, order+1)
    end

    redirect_to manager_evaluation_path(:task_id => @task.id)
  end

  def calculate_class_rank
    @task = Task.find(params[:task_id])
    homeworks = @task.homeworks

    homeworks.sort_by! do |homework|
      homework.finalscore.score
    end
    homeworks.reverse!

    rank = 1
    prev_score = homeworks.first.finalscore.score
    homeworks.each do |homework|
      rank += 1 if homework.finalscore.score != prev_score
      homework.update_attribute(:final_rank, rank)
      prev_score = homework.finalscore.score
    end

    redirect_to teacher_evaluation_path(:task_id => @task.id)
  end

end
