# coding: utf-8
json.key @result['id']
json.creation_id @result['id']
json.title @result['title']
json.created_by json.site_user_id @result['site_user']['site_user_id']
json.published_at 'いまさっき'
json.images do
  json.array!(@result['creation_images']) do |creation_image|
    json.key creation_image['id']
    json.id creation_image['id']
    json.image_name_for_user creation_image['image_name_for_user']
    json.url creation_image['image']['url']
  end
end
