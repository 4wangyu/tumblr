class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def group_error_messages
    self.errors.keys.reduce({}) do |obj, key|
      obj[key] = self.errors.full_messages_for(key)
      obj
    end
  end
end