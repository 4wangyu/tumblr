json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.users do 
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.reblogs do 
  @reblogs.each do |reblog|
    json.set! reblog.id do
      json.partial! 'api/reblogs/reblog', reblog: reblog
    end
  end
end