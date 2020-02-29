class ImageGallery < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post
  # ----------------------------- ActiveStorage
  has_many_attached :image_files
   # ----------------------------- Scope
  default_scope { includes(images_attachments: :blob) }
  # ----------------------------- Validations
end
