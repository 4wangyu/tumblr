class Post < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user

  belongs_to :content, polymorphic: true

  has_many :likes, as: :likable, dependent: :destroy
  has_many :likers, through: :likes

  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :reblogs, as: :rebloggable, dependent: :destroy
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Validations
   
  # ----------------------------- Queries
  def self.pagination(h)
    per_page = h[:per_page].to_i
    page = h[:page].to_i
    self.offset(per_page * (page-1)).limit(per_page)
  end

  def all_tags=(names)
    self.tags = names.map do |name|
      Tag.where(name: name.strip).first_or_create
    end
  end
  
  def all_tags
    self.tags.map(&:name)
  end
end
