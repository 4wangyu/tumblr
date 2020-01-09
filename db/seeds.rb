# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

User.create!(email: 'a.segers.dev@gmail.com', password: 'password', username: 'alex')

5.times do
  email = Faker::Internet.unique.email
  username = Faker::Internet.unique.username
  User.create!(email: email, password: 'password', username: username)
end

users = User.all
15.times do |i|
  title = Faker::Hipster.word
  description = (i % 3 == 0) ? nil : Faker::Hipster.paragraph(sentence_count: 1)
  post_type = 'photo'
  Post.create!(title: title, description: description, post_type: post_type, author: users.sample)
end


puts "Created #{User.count} Users & #{Post.count} Posts!"
