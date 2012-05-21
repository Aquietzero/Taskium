class RenameColumnHomeworkFilePathFile < ActiveRecord::Migration
  def up
    rename_column :homeworks, :file_path, :file
  end

  def down
  end
end
