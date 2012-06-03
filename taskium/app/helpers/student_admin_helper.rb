module StudentAdminHelper
  def get_final_score(user, task)
    homework = user.homeworks.find_by_task_id(task.id)
    return homework.finalscore.score if homework and homework.finalscore
    nil
  end

  def get_final_rank(user, task)
    homework = user.homeworks.find_by_task_id(task.id)
    homeworks_num = task.homeworks.size
    return "(#{homework.final_rank}/#{homeworks_num})" if homework
  end
end
