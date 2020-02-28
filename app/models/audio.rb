class Audio < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post

  # ----------------------------- ActiveStorage
  has_one_attached :audio_file
  has_one_attached :album_art_file
   # ----------------------------- Scope
   default_scope { includes(audio_file_attachment: :blob, album_art_file_attachment: :blob) }
  # ----------------------------- Validations
end
