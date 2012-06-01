module HomeworkViewAndScoreHelper
  def get_homework(user, task)
    user.homeworks.each do |homework|
      return homework if homework.task == task
    end
    nil
  end

  def is_current_user_teacher
    user = User.find(session[:user_id])
    user.role == 'TEACHER' or user.role == 'ADMIN'
  end
end
