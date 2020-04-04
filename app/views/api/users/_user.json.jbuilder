json.extract! user, :id, :email, :username, :followee_ids, :follower_ids, :post_ids, :liked_post_ids
json.avatar_attachment do 
  json.extract! user.avatar, :id, :filename
  json.url url_for(user.avatar)
end