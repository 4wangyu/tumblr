json.extract! image_gallery, :caption
json.image_urls(image_gallery.image_files) do |image_file|
  url_for(image_file)
end