class Video < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post

  # ----------------------------- ActiveStorage
  has_one_attached :video_file

  # ----------------------------- Validations
  
  
end
