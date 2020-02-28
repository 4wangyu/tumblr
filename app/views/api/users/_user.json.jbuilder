json.extract! user, :id, :email, :username, :followee_ids
json.avatar_url user.avatar_file.attached? ? url_for(user.avatar_file) : nil
json.post_ids user.user_post_ids