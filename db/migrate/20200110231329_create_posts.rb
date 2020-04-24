class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.text :body
      t.references :content, index: true, polymorphic: true, null: false
      t.boolean :approved, default: false
      
      t.timestamps
    end
  end
end
