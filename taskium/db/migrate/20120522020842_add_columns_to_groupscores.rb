class AddColumnsToGroupscores < ActiveRecord::Migration
  def change
    add_column :groupscores, :user_id, :integer
    add_column :groupscores, :homework_id, :integer
  end
end
