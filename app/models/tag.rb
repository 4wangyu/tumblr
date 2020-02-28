class Tag < ApplicationRecord
  # ----------------------------- Associations
  has_many :taggings
  has_many :posts, through: :taggings, source: :user_post
  # ----------------------------- Validations
  validates :name, presence: true, uniqueness: true
end
