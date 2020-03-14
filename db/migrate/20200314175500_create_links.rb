class CreateLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :links do |t|
      t.string :url, index: true, null: false
      t.string :title, index: true, null: false
      t.string :description
      t.string :site_name
      t.string :image_url

      t.timestamps
    end
  end
end
