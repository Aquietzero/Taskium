class RemoveFinalGradeFromHomeworks < ActiveRecord::Migration
  def up
    remove_column :homeworks, :final_grade
  end

  def down
  end
end
