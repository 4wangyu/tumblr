json.extract! user, :id, :email, :username, :title, :followee_ids, :follower_ids, :post_ids, :liked_post_ids
json.avatar_attachment do 
  json.extract! user.avatar, :id, :filename
  json.url url_for(user.avatar)
  json.width user.avatar.metadata['width']
  json.height user.avatar.metadata['height']
end