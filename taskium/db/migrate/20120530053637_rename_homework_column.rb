class RenameHomeworkColumn < ActiveRecord::Migration
  def up
    rename_column :homeworks, :file, :filename
  end

  def down
  end
end
