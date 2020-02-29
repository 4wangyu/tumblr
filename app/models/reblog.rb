class Reblog < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user, as: :reblogger

  has_many :likes, as: :likable, dependent: :destroy
  has_many :likers, through: :likes

  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :reblogs, as: :rebloggable, dependent: :destroy
  belongs_to :rebloggable, polymorphic: true
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Validations

  def source
    #the original user post
  end
end
