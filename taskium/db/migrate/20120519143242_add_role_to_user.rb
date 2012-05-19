class AddRoleToUser < ActiveRecord::Migration
  def change
    add_column :users, :role, :string
    add_column :users, :group_id, :integer
  end
end
