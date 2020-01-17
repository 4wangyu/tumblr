class UserPost < ApplicationRecord
  # ----------------------------- Validations
  
  # ----------------------------- Associations
  belongs_to :user
  belongs_to :post, polymorphic: true

  # ----------------------------- Queries
  def self.pagination(h)
    per_page = h[:per_page].to_i
    page = h[:page].to_i
    self.offset(per_page * (page-1)).limit(per_page)
  end
end
