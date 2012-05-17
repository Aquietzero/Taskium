class CreateTable < ActiveRecord::Migration
  def up
    create_table :posts_tags do |t|
      t.integer :post_id
      t.integer :tag_id

      t.timestamps
    end
  end

  def down
  end
end
