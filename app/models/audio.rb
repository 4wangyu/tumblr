class Audio < ApplicationRecord
  # ----------------------------- Associations
  has_one :post, as: :content, dependent: :destroy
  has_one :user, through: :post

  # ----------------------------- ActiveStorage
  has_one_attached :audio
  has_one_attached :album
   # ----------------------------- Scope
   default_scope { includes(audio_attachment: :blob, album_art_attachment: :blob) }
  # ----------------------------- Validations
end
