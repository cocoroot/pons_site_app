json.user_image do
  user_image = @result['site_user_image']
  json.id user_image['id']
  json.user_id user_image['site_user_id']
  json.image user_image['image']
  json.image_name_for_user user_image['image_name_for_user']
end
