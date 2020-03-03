# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
ImageGallery.destroy_all
Video.destroy_all

5.times do |i|
  # User
  email = i == 0 ? 'demo@bot.com': Faker::Internet.unique.email
  username = i == 0 ? 'demolicious' : Faker::Internet.unique.username
  user = User.create!(email: email, password: 'password', username: username)
  user.avatar.attach(
    io: File.open(
      File.join(Rails.root, "db/fixtures/avatars/avatar-#{i}.jpg")
    ), 
    filename: "avatar-#{i}"
  )
  
  # ImageGallery 
  (rand(3)+1).times do
    caption = Faker::Hipster.unique.word
    image_gallery = ImageGallery.new(caption: caption)
    [1,1,1,2,3,1].sample.times do
      rand_int = rand(21)
      image_gallery.images.attach(
        io: File.open(
          File.join(Rails.root, "db/fixtures/images/image-#{rand_int}.jpg")
        ), 
        filename: "image-#{rand_int}"
      )
      image_gallery.save! 
    end
    user.posts.create!({ content: image_gallery })
  end
end

puts "Created #{User.count} Users & #{Post.count} Posts!"
