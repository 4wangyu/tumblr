json.partial! '/api/posts/post', post: reblog.post
json.extract! reblog, :id, :created_at
json.is_reblog true
json.post_id reblog.post_id
json.reblogger_id reblog.user_id
json.reblog_caption reblog.caption
json.tags reblog.all_tags