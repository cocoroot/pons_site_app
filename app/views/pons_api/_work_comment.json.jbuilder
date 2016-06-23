if comment
  json.id comment['id']
  json.user do
    json.partial! partial: 'user', locals: { user: comment['site_user'] }
  end
  json.body comment['body']
  json.created_at string_date_to_formated_date(comment['created_at'])
end
