
module RequestsHelper
  def get_with_token(path, token, params={}, headers={})
    headers.merge!('HTTP_ACCESS_TOKEN' => token)
    get path, params, headers
  end

  def post_with_token(path, token, params={}, headers={})
    headers.merge!('HTTP_ACCESS_TOKEN' => token)
    post path, params, headers
  end

  def put_with_token(path, token, params={}, headers={})
    headers.merge!('HTTP_ACCESS_TOKEN' => token)
    put path, params, headers
  end

  def delete_with_token(path, token, params={}, headers={})
    headers.merge!('HTTP_ACCESS_TOKEN' => token)
    delete path, params, headers
  end
end
