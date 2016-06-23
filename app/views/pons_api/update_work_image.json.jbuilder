json.work_images do
  json.array! @result['creation_images'], 'id', 'image', 'image_name_for_user'
end
