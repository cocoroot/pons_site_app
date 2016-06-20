json.id user['site_user_id']

json.image user['image']
json.header_image user['header_image']

json.nickname user['nickname']
json.biography user['biography']
json.tos_accepted user['tos_accepted']
json.user_status do
  json.id user['site_user_status']['id']
  json.name user['site_user_status']['name']
end

json.owner user['owner']
