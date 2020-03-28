class User < ApplicationRecord
  # ----------------------------- Associations
  has_many :posts, dependent: :destroy

  has_many :likes,
    class_name: :Like,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :followed_users, foreign_key: :follower_id, class_name: :Follow
  has_many :followees, through: :followed_users
  
  has_many :following_users, foreign_key: :followee_id, class_name: :Follow
  has_many :followers, through: :following_users

  # ----------------------------- ActiveStorage
  has_one_attached :avatar
  # ----------------------------- Scope
  default_scope { includes(avatar_attachment: :blob) }

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

  # ----------------------------- Queries
  def recommended_users
    User
      .where.not(id: self.followees.pluck(:id))
      .where.not(id: self.id)
  end

  def radar_post
    Post
      .where(user_id: self.recommended_users.pluck(:id), content_type: :ImageGallery)
      .left_joins(:likes)
      .group(:id)
      .order(Arel.sql('COUNT(likes.id) DESC'))
      .first
  end

end
