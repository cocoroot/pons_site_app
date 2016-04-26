json.array!(@pieces) do |piece|
  json.extract! piece, :id, :name, :file_name, :url, :image, :thumbnail
  json.url piece_url(piece, format: :json)
end