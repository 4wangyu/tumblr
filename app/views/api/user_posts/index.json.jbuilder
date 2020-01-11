@user_posts.each do |user_post|
  json.set! user_post.id do
    json.partial! 'user_post', user_post: user_post
  end
end