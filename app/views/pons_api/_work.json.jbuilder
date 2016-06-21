json.id work['id']

json.user do
  json.user_id work['site_user']['site_user_id']
  json.image work['site_user']['image']
end

json.title work['title']
json.description work['description']
json.work_status work['creation_status']['creation_status']

json.work_images do
  json.array! work['creation_images'], 'id', 'image', 'image_name_for_user'
end

json.work_pieces do
  json.array! work['creation_pieces'], 'id', 'name', 'file', 'file_name_for_user', 'format', 'image', 'image_name_for_user'
end

json.work_tags do
  json.array! work['creation_tags']
end

json.work_comments_count work['creation_comments_count']
json.work_comments do
  json.array! work['creation_comments'] do |comment|
    json.id comment['id']
    json.user do
      json.user_id comment['id']
      json.image comment['site_user']['site_user_image']
    end
    json.body comment['body']
    json.created_at comment['created_at']
  end
end

json.owner work['owner']

json.likess_count work['goods_count']
json.like work['good']
