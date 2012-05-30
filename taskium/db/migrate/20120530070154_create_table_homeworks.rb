class CreateTableHomeworks < ActiveRecord::Migration
  def up
    create_table "homeworks", :force => true do |t|
      t.integer  "task_id"
      t.integer  "user_id"
      t.integer  "group_rank"
      t.integer  "final_rank"
      t.integer  "final_score"
      t.string   "url"
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
      t.string   "file_pack"
    end
  end

  def down
  end
end
