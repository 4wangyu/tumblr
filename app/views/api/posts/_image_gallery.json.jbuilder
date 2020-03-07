json.caption image_gallery.caption
json.image_attachments image_gallery.images do |image|
  json.partial! '/api/shared/attachment', attachment: image
end