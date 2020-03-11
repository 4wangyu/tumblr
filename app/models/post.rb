class Post < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user

  belongs_to :content, polymorphic: true

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes

  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :reblogs, dependent: :destroy
  # ----------------------------- ActiveStorage
  
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Validations
   
  # ----------------------------- Queries

  def all_tags=(names)
    return if names.nil?
    self.tags = names.map do |name|
      Tag.where(name: name.strip).first_or_create
    end
  end
  
  def all_tags
    self.tags.map(&:name)
  end
end
