json.works do
  json.partial! partial: 'work', collection: @result['creations'], as: :work
end
