module StudentAdminHelper
  def get_final_score(user, task)
    user.homeworks.each do |homework|
      return homework.finalscore if homework.task == task and homework.finalscore
    end
    nil
  end
end
