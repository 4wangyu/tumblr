json.caption image_gallery.caption
json.images image_gallery.images do |image|
  json.partial! '/api/shared/attachment', attachment: image
end