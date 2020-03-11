json.extract! @og, :title, :description
json.image do
  json.extract! @og.image, :url, :type, :width, :height
end