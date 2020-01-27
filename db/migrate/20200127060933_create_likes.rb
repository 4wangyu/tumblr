class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :user_post, as: :post, foreign_key: true
      t.references :user, as: :liker, foreign_key: true

      t.timestamps
    end
    add_index :likes, [:user_post, :user], unique: true
  end
end
