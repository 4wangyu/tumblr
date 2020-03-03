class Like < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :post
  belongs_to :liker, class_name: :User, foreign_key: :user_id
  # ----------------------------- Validations
  validates_uniqueness_of :post, scope: [:liker]
end
