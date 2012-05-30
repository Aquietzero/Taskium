module HomeworkViewAndScoreHelper
  def get_homework(user, task)
    user.homeworks.each do |homework|
      return homework if homework.task == task
    end
    nil
  end
end
