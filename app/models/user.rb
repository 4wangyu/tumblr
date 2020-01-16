class User < ApplicationRecord
  # ----------------------------- Associations
  has_many :user_posts, dependent: :destroy

  # ----------------------------- ActiveStorage
  has_one_attached :avatar_file

  # ----------------------------- Validations
  validates :email, :username, presence: true, uniqueness: true
  validates :session_token, uniqueness: true
  validates :username, length: { minimum: 3 }
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  # ----------------------------- Auth
  has_secure_password
  has_secure_token :session_token

  def self.find_by_credentials(email:, password:)
    user = User.find_by_email(email)
    return nil unless user
    user.authenticate(password)
  end

end
