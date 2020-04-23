class ImageGallery < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post
  has_many_attached :images
   # ----------------------------- Scope
  default_scope { includes(images_attachments: :blob) }
  # ----------------------------- Validations
  validates :images, 
    attached: true, 
    content_type: /\Aimage\/.*\z/,
    limit: { min: 1, max: 5 },
    size: { less_than: 2.megabytes , message: 'must be 2MB or less' }
end
