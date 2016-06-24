if @result
  if @result.include?('errors')
    json.errors @result['errors']
  else
    JSON.parse(yield).each do |k, v|
      json.set! k, v
    end
  end
  json.warnings @result['warnings'] if @result.include?('warnings')
end
