# coding: utf-8
json.creation_id @result['id']
json.title @result['title']
json.created_by json.site_user_id @result['site_user']['site_user_id']
json.published_at 'いまさっき'
# json.images do
#   json.array! @result['creation_images'], 'image', 'image_name_for_user'
# end
