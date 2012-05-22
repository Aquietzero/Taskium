class CreateFinalscores < ActiveRecord::Migration
  def change
    create_table :finalscores do |t|
      t.integer :score
      t.text :explanation

      t.timestamps
    end
  end
end
