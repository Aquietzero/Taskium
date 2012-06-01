module ScoreAndRankingHelper
  def get_homework(user, task)
    user.homeworks.each do |homework|
      return homework if homework.task == task
    end
    nil
  end

  def get_deploy_link(user, task)
    homework = get_homework(user, task)
    return "#{task.id}/#{user.student_id}/#{homework.url}" if homework
    nil
  end

  def get_group_rank(user, task)
    homework = get_homework(user, task)
    return homework.group_rank if homework
    nil
  end

  def get_download_link(user, task)
    homework = get_homework(user, task)
    return "#{task.id}/#{user.student_id}/#{homework.file_pack}.zip" if homework
    nil
  end

end
