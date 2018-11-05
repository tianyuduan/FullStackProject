class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :parent_comment_id
      t.integer :photo_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :comments, :photo_id
  end
end
