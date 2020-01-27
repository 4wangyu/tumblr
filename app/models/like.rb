class Like < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :post,
    class_name: :UserPost,
    foreign_key: :user_post_id

  belongs_to :liker,
    class_name: :User,
    foreign_key: :user_id

  # ----------------------------- Validations
  validates_uniqueness_of :post, scope: [:liker]
end
