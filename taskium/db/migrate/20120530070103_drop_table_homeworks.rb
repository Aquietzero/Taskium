class DropTableHomeworks < ActiveRecord::Migration
  def up
    drop_table :homeworks
  end

  def down
  end
end
