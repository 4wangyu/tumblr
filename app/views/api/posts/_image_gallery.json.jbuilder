json.caption image_gallery.caption
json.image_urls image_gallery.images.collect {|f| url_for(f)}
json.user_id image_gallery.caption