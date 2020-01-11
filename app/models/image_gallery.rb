class ImageGallery < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post

  # ----------------------------- ActiveStorage
  has_many_attached :image_files

  # ----------------------------- Validations
  
  
end
