json.array!(@creations) do |creation|
  json.extract! creation, :id, :title, :created_by, :published_at
  json.url creation_url(creation, format: :json)
end
