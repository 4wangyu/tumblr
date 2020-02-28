class Follow < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :follower, class_name: :User
  belongs_to :followee, class_name: :User
  # ----------------------------- Validations
  validates_uniqueness_of :followee, scope: [:follower]
end
