class Tagging < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :postable, polymorphic: true
  belongs_to :tag
  # ----------------------------- Validations
  validates_uniqueness_of :user_post, scope: [:tag] 
end
