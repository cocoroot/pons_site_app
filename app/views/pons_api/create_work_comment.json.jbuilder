# json.work_comments do
#   json.partial! partial: 'work_comment', collection: @result['creation_comments'], as: :comment
# end
json.work_comment do
  json.partial! partial: 'work_comment', locals: { comment: @result }
end
