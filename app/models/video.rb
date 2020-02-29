class Video < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post

  # ----------------------------- ActiveStorage
  has_one_attached :video
  # ----------------------------- Scope
  default_scope { includes(video_attachment: :blob) }
  # ----------------------------- Validations
  
  
end
