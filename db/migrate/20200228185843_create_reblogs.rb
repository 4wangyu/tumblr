class CreateReblogs < ActiveRecord::Migration[5.2]
  def change
    create_table :reblogs do |t|
      t.string :content
      t.references :rebloggable, index: true, polymorphic: true, null: false
      t.references :user, as: :reblogger, index: true, foreign_key: true, null: false

      t.timestamps
    end
  end
end
