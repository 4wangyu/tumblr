json.extract! user, :id, :email, :username, :followee_ids, :post_ids
json.avatar_url user.avatar.attached? ? url_for(user.avatar) : nil