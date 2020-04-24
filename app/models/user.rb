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
  has_many :followed_users, 
    foreign_key: :follower_id, 
    class_name: :Follow
  has_many :followees, 
    through: :followed_users
  has_many :following_users, 
    foreign_key: :followee_id, 
    class_name: :Follow
  has_many :followers, 
    through: :following_users
  has_one_attached :avatar
  # ----------------------------- Scope
  default_scope { includes(avatar_attachment: :blob) }
  # ----------------------------- Validations
  validates :email, 
    :username, 
    presence: true, 
    uniqueness: true
  validates :session_token, 
    uniqueness: true
  validates :username, 
    length: { minimum: 3 }
  validates :password, 
    length: { minimum: 6 }, 
    allow_nil: true
  validates :avatar, 
    attached: true, 
    content_type: ['image/png', 'image/jpg', 'image/jpeg'],
    dimension: { width: { in: 50..200 } }
  before_validation :enforce_avatar

  def enforce_avatar
    unless self.avatar.attached?
      n = rand(1..10)
      avatar_url = Rails.root.join("app", "assets", "images", "avatar_#{n}.png")
      self.avatar.attach(
        io: File.open(avatar_url),
        filename: "avatar_#{n}.png",
        content_type: 'image/png'
      )
    end
  end
  # ----------------------------- Auth
  has_secure_password
  has_secure_token :session_token

  def self.find_by_credentials(email:, password:)
    user = User.find_by_email(email)
    return nil unless user
    user.authenticate(password)
  end
  # ----------------------------- Queries
  def self.name_like(query)
    return [] if query.nil? || query.empty?
    self
      .where("username LIKE ?", "%#{query.downcase}%")
      .or(self.where("title LIKE ?", "%#{query.downcase}%"))
  end

  def dashboard_posts
    Post
      .where(user_id: self.followees.pluck(:id))
      .where(user_id: self.id)
  end
  
  def explore_posts
    Post
      .where.not(user_id: self.followees.pluck(:id))
      .where.not(user_id: self.id)
  end

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
