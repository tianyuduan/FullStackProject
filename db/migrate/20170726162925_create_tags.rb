class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :tag_name, null: false
      t.timestamps
    end
    add_index :tags, :tag_name
  end
end
