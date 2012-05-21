class AddFilePathToHomework < ActiveRecord::Migration
  def change
    add_column :homeworks, :file_path, :string

  end
end
