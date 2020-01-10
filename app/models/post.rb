class Post < ApplicationRecord
  validates :title, :post_type, presence: true

  has_one_attached :asset
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
