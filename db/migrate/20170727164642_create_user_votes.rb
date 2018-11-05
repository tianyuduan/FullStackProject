class CreateUserVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :user_votes do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false
      t.integer :value, null: false
      t.timestamps
    end
    add_index :user_votes, :photo_id
    add_index :user_votes, [:photo_id, :user_id], unique: true
  end
end
