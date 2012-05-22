class CreateGroupscores < ActiveRecord::Migration
  def change
    create_table :groupscores do |t|
      t.integer :score
      t.text :explanation

      t.timestamps
    end
  end
end
