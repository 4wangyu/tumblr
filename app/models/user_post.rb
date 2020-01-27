class UserPost < ApplicationRecord
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Validations
  
  # ----------------------------- Associations
  belongs_to :user
  belongs_to :post, polymorphic: true

  has_many :likes,
    class_name: :Like,
    foreign_key: :user_post_id

  has_many :likers,
    through: :likes,
    source: :liker
  # ----------------------------- Queries
  def self.pagination(h)
    per_page = h[:per_page].to_i
    page = h[:page].to_i
    self.offset(per_page * (page-1)).limit(per_page)
  end
end
