class Tag < ApplicationRecord
  # ----------------------------- Associations
  has_many :taggings
  has_many :posts, through: :taggings, source: :taggable, source_type: :Post
  # ----------------------------- Validations
  validates :name, presence: true, uniqueness: true

  def self.name_like(query)
    return [] if query.nil? || query.empty?
    self.joins(:posts).where("name LIKE ?", "%#{query.downcase}%").pluck(:name)
  end
end
