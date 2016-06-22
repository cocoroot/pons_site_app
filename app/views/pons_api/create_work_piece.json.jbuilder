json.work_pieces do
  json.array! @result['creation_pieces'], 'id', 'name', 'file', 'file_name_for_user', 'format', 'image', 'image_name_for_user'
end
