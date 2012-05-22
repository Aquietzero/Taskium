module AdminHelper
  # Get the homework with the given user and task. 
  def get_homework(user, task)
    homework = user.homeworks.select {|homework| homework.task_id == task.id}
    homework.first if homework.length == 1
  end

  # Get the homework user's name with the given user and task if the user has handed
  # in that specific homework.
  def get_homework_username(user, task)
    homework = get_homework(user, task)
    homework.user.name if homework
  end
end
