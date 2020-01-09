class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :description
      t.string :post_type, null: false, default: 'photo'
      t.references :author, index: true, foreign_key: {to_table: :users}, null: false

      t.timestamps
    end
    add_index :posts, :post_type
  end
end
