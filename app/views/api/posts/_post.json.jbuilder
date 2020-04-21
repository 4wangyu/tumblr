json.extract! post, :id, :content_type, :body
case post.content_type
  when 'ImageGallery'
    json.partial! '/api/posts/image_gallery', image_gallery: post.content
  when 'Audio'
    json.partial! '/api/posts/audio', audio: post.content
  when 'Video'
    json.partial! '/api/posts/video', video: post.content
  when 'Link'
    json.partial! '/api/posts/link', link: post.content
  when 'Quote'
    json.partial! '/api/posts/quote', quote: post.content
  when 'Text'
    json.partial! '/api/posts/text', text: post.content
  when 'Chat'
    json.partial! '/api/posts/chat', chat: post.content
end
json.tags post.all_tags
json.extract! post, :user_id, :liker_ids, :created_at