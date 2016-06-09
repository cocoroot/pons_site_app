# coding: utf-8
#require 'httpclient'

ACCESS_KEY = '8DC8D19E-8A35-43C8-95F4-49A316283591'
API_BASE = 'http://localhost:3000'

class DarrestCoreApi
  def create_user(params)
  end

  # params = {
  #   user_id: <user_id *required>,
  #   biography: <biography>
  # }
  # def create_site_user(params)
  #   send_post('/site_users', params)
  # end

  # params = {
  #   id: <site_user_id>
  # }
  def show_site_user(params)
    send_get("/site_users/#{params[:id]}")
  end

  # params = {
  #   user_baas_id: <user_baas_id>,
  #   site_user: {
  #     biography: <biography>,
  #     tos_accepted: <true|false>,
  #     site_user_status: <site_user_status>
  #   }
  # }
  def update_site_user(params)
    send_put('/me', params)
  end

  # params = {
  #   user_baas_id: <user_baas_id>,
  #   site_user_image: {
  #     image: <image_file>
  #   }
  # }
  def create_site_user_image(params)
    send_post('/my/site_user_image', params) do |req, parameters|
      received_image = parameters[:site_user_image][:image]

      original_filename = received_image.original_filename
      content_type = received_image.content_type
      file = received_image.tempfile

      stream = MultiPartFormDataStream.new
      stream.add_form('user_baas_id', parameters[:user_baas_id])
      stream.add_file('image', original_filename, content_type, file)

      req.body_stream = stream
      req['Content-Length'] = stream.size
      req['Content-Type'] = stream.content_type
    end
  end

  # params = {
  #   user_baas_id: <user_baas_id>
  #   site_user_header_image: {
  #     image: <image_file>
  #   }
  # }
  def create_site_user_header_image(params)
    send_post('/my/site_user_header_image', params) do |req, parameters|
      received_image = parameters[:site_user_header_image][:image]

      original_filename = received_image.original_filename
      content_type = received_image.content_type
      file = received_image.tempfile

      stream = MultiPartFormDataStream.new
      stream.add_form('user_baas_id', parameters[:user_baas_id])
      stream.add_file('image', original_filename, content_type, file)

      req.body_stream = stream
      req['Content-Length'] = stream.size
      req['Content-Type'] = stream.content_type
    end
  end

  def create_creation(params)
    send_post('/creations', params)
  end

  def show_creation(params)
    send_get("/creations/#{params[:id]}")
  end

  def update_creation(params)
  end

  def create_creation_image(params)
  end

  def show_creation_image(params)
  end

  def update_creation_image(params)
  end

  def delete_creation_image(params)
  end

  def create_creation_piece(params)
  end

  def update_creation_piece(params)
  end

  def delete_cleation_piece(params)
  end

  def create_creation_tag(params)
  end

  def delete_creation_tag(params)
  end

  def create_creation_comment(params)
  end

  def create_good(params)
  end

  def index_good(params)
  end

  def delete_good(params)
  end

  private

  def send_get(api, &_block)
    send(:get, api, nil)
  end

  def send_post(api, params, &block)
    send(:post, api, params) { |r, p| block.call(r, p) }
  end

  def send_put(api, params, &block)
    send(:put, api, params) { |r, p| block.call(r, p) }
  end

  def send_delete(api, params, &block)
    send(:put, api, params) { |r, p| block.call(r, p) }
  end

  def send(method, api, params, &block)
    uri = URI.parse("#{API_BASE}#{api}")

    http = Net::HTTP.new(uri.host, uri.port)

    if %w(development test).include? Rails.env
      http.use_ssl = false
    else
      http.use_ssl = true
    end

    case method
    when :post
      req = Net::HTTP::Post.new(uri.request_uri)
    when :get
      req = Net::HTTP::Get.new(uri.request_uri)
    when :put
      req = Net::HTTP::Put.new(uri.request_uri)
    when :delete
      req = Net::HTTP::Delete.new(uri.request_uri)
    end

    req['access_key'] = ACCESS_KEY

    if block
      block.call(req, params)
    else
      req['Content-Type'] = 'application/json'
      req.body = params.to_json if params
    end

    #
    # send request
    #
    res = http.request(req)

    #
    # parse response
    #
    JSON.parse(res.body)
  end
end