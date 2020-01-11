json.id user_post.id
case user_post.post_type
  when 'ImageGallery'
    json.partial! 'image_gallery', image_gallery: user_post.post
  when 'Audio'
    json.partial! 'audio', audio: user_post.post
  when 'Video'
    json.partial! 'video', video: user_post.post
end
json.post_type user_post.post_type

