class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.references :taggable, polymorphic: true, null: false
      t.references :tag, foreign_key: true, null: false

      t.timestamps
    end
    add_index :taggings, [:taggable, :tag], unique: true
  end
end
