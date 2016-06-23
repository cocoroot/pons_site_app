json.id work['id']

json.user do
  json.partial! partial: 'user', locals: { user: work['site_user'] }
end

json.title work['title']
json.description work['description']
json.work_status do
  json.id work['creation_status']['id']
  json.code work['creation_status']['code']
  json.name work['creation_status']['name']
end

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
  json.partial! partial: 'work_comment', collection: work['creation_comments'], as: :comment
end

json.published_at string_date_to_formated_date(work['published_at'])

json.owner work['owner']

json.likes_count work['goods_count']
json.like work['good']
