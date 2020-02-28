json.extract! user_post, :id, :post_type
case user_post.post_type
  when 'ImageGallery'
    json.partial! '/api/posts/image_gallery', image_gallery: user_post.post
  when 'Audio'
    json.partial! '/api/posts/audio', audio: user_post.post
  when 'Video'
    json.partial! '/api/posts/video', video: user_post.post
end
json.tags user_post.all_tags
json.extract! user_post, :user_id, :liker_ids, :created_at