class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likable, polymorphic: true, null: false
      t.references :user, as: :liker, foreign_key: true, null: false
      
      t.timestamps
    end
    add_index :likes, [:likable, :user], unique: true
  end
end
