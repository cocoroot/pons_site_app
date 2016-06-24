json.user_header_image do
  user_header_image = @result['site_user_header_image']
  json.id user_header_image['id']
  json.user_id user_header_image['site_user_id']
  json.image user_header_image['image']
  json.image_name_for_user user_header_image['image_name_for_user']
end
