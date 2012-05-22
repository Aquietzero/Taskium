class AddColumnsToFinalscores < ActiveRecord::Migration
  def change
    add_column :finalscores, :homework_id, :integer
  end
end
