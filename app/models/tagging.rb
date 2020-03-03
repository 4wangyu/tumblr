class Tagging < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :taggable, polymorphic: true
  belongs_to :tag
  # ----------------------------- Validations
  # validates_uniqueness_of :taggable, scope: [:tag] 
end
