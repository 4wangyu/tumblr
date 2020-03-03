class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :post, foreign_key: true, null: false
      t.references :user, as: :liker, foreign_key: true, null: false
      
      t.timestamps
    end
    add_index :likes, [:post_id, :user_id], unique: true
  end
end
