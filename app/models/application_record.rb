class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def group_error_messages
    self.errors.keys.reduce({}) do |obj, key|
      obj[key] = self.errors.full_messages_for(key)
      obj
    end
  end

  def self.paginate(limit: nil, offset: nil)
    if limit && offset
      self.offset(offset.to_i).limit(limit.to_i)
    else
      self.limit(50)
    end
  end
end