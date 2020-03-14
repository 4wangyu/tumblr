json.extract! post, :id, :content_type, :body
json.is_reblog false
case post.content_type
  when 'ImageGallery'
    json.partial! '/api/posts/image_gallery', image_gallery: post.content
  when 'Audio'
    json.partial! '/api/posts/audio', audio: post.content
  when 'Video'
    json.partial! '/api/posts/video', video: post.content
  when 'Link'
    json.partial! '/api/posts/link', link: post.content
end
json.tags post.all_tags
json.extract! post, :user_id, :liker_ids, :created_at