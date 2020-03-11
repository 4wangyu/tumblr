class CreateReblogs < ActiveRecord::Migration[5.2]
  def change
    create_table :reblogs do |t|
      t.integer :parent_id, foreign_key: true
      t.references :user, index: true, foreign_key: true, null: false
      t.references :post, index: true, foreign_key: true, null: false
      t.text :caption

      t.timestamps
    end
  end
end
