require_relative './users.fixtures'

demo_user = User.new(UsersFixtures.demo)
demo_user.password = Rails.application.credentials.user_seeds[:demo_password]
demo_user.save!

UsersFixtures.all.each do |user|
  username, title = user.values_at(:username, :title)
  User.create!(
    username: username, 
    title: title,
    email: "#{username}@example.com",
    password: Rails.application.credentials.user_seeds[:password]
  )
end