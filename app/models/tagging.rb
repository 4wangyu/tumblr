class Tagging < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user_post
  belongs_to :tag
  # ----------------------------- Validations
  validates_uniqueness_of :user_post, scope: [:tag] 
end
