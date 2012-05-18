class CreateTablePostsTags < ActiveRecord::Migration
  def up
    create_table :posts_tags do |t|
      t.integer :post_id
      t.integer :tag_id
    end
  end

  def down
    drop_table :posts_tags
  end
end
