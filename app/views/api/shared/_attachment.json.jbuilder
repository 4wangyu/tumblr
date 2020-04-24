json.extract! attachment, :id, :filename
json.url url_for(attachment)
json.width attachment.metadata['width']
json.height attachment.metadata['height']