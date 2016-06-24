json.likes do
  json.partial! partial: 'work', collection: @result['goods'], as: :work
end
