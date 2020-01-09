class Post < ApplicationRecord
  validates :title, :post_type, presence: true
  # validates :description, length: { minimum: 5 }, allow_nil: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
