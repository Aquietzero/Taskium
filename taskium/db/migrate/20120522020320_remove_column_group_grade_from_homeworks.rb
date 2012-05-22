class RemoveColumnGroupGradeFromHomeworks < ActiveRecord::Migration
  def up
    remove_column :homeworks, :group_grade
  end

  def down
    add_column :homeworks, :group_grade
  end
end
