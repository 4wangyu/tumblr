class ImageGallery < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post
  # ----------------------------- ActiveStorage
  has_many_attached :image_files
   # ----------------------------- Scope
  default_scope { includes(image_files_attachments: :blob) }
  # ----------------------------- Validations
end
