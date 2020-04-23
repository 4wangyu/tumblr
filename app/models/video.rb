class Video < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post

  # ----------------------------- ActiveStorage
  has_one_attached :video
  # ----------------------------- Scope
  default_scope { includes(video_attachment: :blob) }
  # ----------------------------- Validations
  validates :video, 
    attached: true, 
    content_type: 'video/mp4',
    size: { less_than: 100.megabytes , message: 'must be 100MB or less' }
end
