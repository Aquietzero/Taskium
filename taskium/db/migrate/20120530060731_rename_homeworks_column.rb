class RenameHomeworksColumn < ActiveRecord::Migration
  def up
    rename_column :homeworks, :filename, :file_pack
  end

  def down
  end
end
