json.work do
  json.partial! partial: 'work', locals: { work: @result['creation'] }
end
