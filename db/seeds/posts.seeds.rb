require_relative './users.fixtures'

def rand_image_count
  case rand*100
    when 0..12.5 then 3
    when 12.5..37.5 then 2
    else 1
  end
end

after :users do
  5.times do
    fixture = UsersFixtures.random
    user = User.find_by_username(fixture[:username])
    post = Post.from_unsplash(query: fixture[:keywords].sample, image_count: rand_image_count)
    user.posts << post unless post.nil?
    sleep(2.seconds)
  end
end