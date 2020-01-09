class User < ApplicationRecord
  validates :email, :username, presence: true, uniqueness: true
  validates :session_token, uniqueness: true
  validates :username, length: { minimum: 3 }
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  has_secure_password
  has_secure_token :session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post
  #, dependent: :destroy

  def self.find_by_credentials(username:, password:)
    user = User.find_by(username: username)
    return nil unless user
    user.authenticate(password)
  end

end
