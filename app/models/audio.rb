class Audio < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post
  has_one_attached :audio
  has_one_attached :album_art
  # ----------------------------- Scope
  default_scope { includes(audio_attachment: :blob, album_art_attachment: :blob) }
  # ----------------------------- Validations
  validates_presence_of :track
  validates :audio, 
    attached: true, 
    content_type: 'audio/mp3',
    size: { less_than: 1.megabytes , message: 'must be 1MB or less' }
end
