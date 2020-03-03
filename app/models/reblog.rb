class Reblog < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user

  belongs_to :post

  belongs_to :parent, class_name: :Reblog, foreign_key: :parent_id, optional: true

  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Validations
  #------------------------------ Queries
  def all_tags=(names)
    self.tags = names.map do |name|
      Tag.where(name: name.strip).first_or_create
    end
  end
  
  def all_tags
    self.tags.map(&:name)
  end


  def associated_users

  end
end
