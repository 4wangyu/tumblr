class UserPost < ApplicationRecord
  # ----------------------------- Validations
  
  # ----------------------------- Associations
  belongs_to :user
  belongs_to :post, polymorphic: true
  # default_scope { order(:sequence).includes(:post) }
end
