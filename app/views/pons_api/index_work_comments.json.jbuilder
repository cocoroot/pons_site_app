json.work_comments do
  json.partial! partial: 'work_comment', collection: @result['creation_comments'], as: :comment
end
