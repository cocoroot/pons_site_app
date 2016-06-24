json.like do
  json.partial! partial: 'like', locals: { like: @result['good'] }
end
