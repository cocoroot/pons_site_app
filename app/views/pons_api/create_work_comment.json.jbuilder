json.work_comment do
  json.partial! partial: 'work_comment', locals: { comment: @result['creation_comment'] }
end
