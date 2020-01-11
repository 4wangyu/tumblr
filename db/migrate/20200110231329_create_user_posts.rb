class CreateUserPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_posts do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :post, index: true, polymorphic: true, null: false

      t.timestamps
    end
  end
end
