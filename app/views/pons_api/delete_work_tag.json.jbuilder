json.work_tags do
  json.partial! partial: 'work_tag', collection: @result['creation_tags'], as: :tag
end
