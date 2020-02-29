json.partial! '/api/posts/user_post', user_post: reblog.source
json.extract! reblog, :id, :likes, :created_at, :content
json.tags reblog.all_tags
json.reblogger_id reblog.user_id
json.reblog true
json.source_id reblog.source.id