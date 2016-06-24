json.user do
  json.partial! partial: 'user', locals: { user: @result['site_user'] }
end
