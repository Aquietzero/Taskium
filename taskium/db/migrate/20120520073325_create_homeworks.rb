class CreateHomeworks < ActiveRecord::Migration
  def change
    create_table :homeworks do |t|
      t.integer :task_id
      t.integer :user_id
      t.integer :group_grade
      t.integer :final_grade
      t.integer :group_rank
      t.integer :final_rank
      t.string :url

      t.timestamps
    end
  end
end
