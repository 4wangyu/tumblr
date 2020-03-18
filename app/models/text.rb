class Text < ApplicationRecord
   # ----------------------------- Associations
   has_one :post, as: :content, dependent: :destroy
   has_one :user, through: :post
   # ----------------------------- Validations
   validates_presence_of :text
end
