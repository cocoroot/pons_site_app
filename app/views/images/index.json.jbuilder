json.array!(@images) do |image|
  json.extract! image, :id, :url, :url_thumbnail, :sticky, :type
  json.url image_url(image, format: :json)
end
