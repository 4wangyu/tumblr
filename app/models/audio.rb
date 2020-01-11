class Audio < ApplicationRecord
  # ----------------------------- Associations
  has_one :user_post, as: :post, dependent: :destroy
  has_one :user, through: :user_post

  # ----------------------------- ActiveStorage
  has_one_attached :audio_file
  has_one_attached :album_art_file


  # ----------------------------- Validations
end
