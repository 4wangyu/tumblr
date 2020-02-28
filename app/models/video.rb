class Video < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post

  # ----------------------------- ActiveStorage
  has_one_attached :video_file
  # ----------------------------- Scope
  default_scope { includes(video_file_attachment: :blob) }
  # ----------------------------- Validations
  
  
end
