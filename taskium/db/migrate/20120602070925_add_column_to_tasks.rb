class AddColumnToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :released, :boolean
  end
end
