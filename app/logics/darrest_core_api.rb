# coding: utf-8
#require 'httpclient'

ACCESS_KEY = '8DC8D19E-8A35-43C8-95F4-49A316283591'
API_BASE = 'http://localhost:3000'

class DarrestCoreApi
  def create_user(params)
  end

  def show_my_info(params)
    send_get('/me', params)
  end

  # params = {
  #   id: <site_user_id>
  # }
  def show_site_user(params)
    send_get("/site_users/#{params[:id]}", params.except(:id))
  end

  # params = {
  #   user_baas_id: <user_baas_id>,
  #   site_user: {
  #     nickname: <nickname>,
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

  def index_creations_created_by_user(params)
    send_get("/site_users/#{params[:site_user_id]}/creations", params)
  end

  def create_creation(params)
    send_post('/creations', params)
  end

  def show_creation(params)
    send_get("/creations/#{params[:id]}", params)
  end

  def update_creation(params)
    send_put("/creations/#{params[:id]}", params.except(:id))
  end

  def create_creation_image(params)
    send_post("/creations/#{params[:creation_id]}/creation_images", params) do |req, parameters|
      received_image = parameters[:creation_image][:image]

      original_filename = received_image.original_filename
      content_type = received_image.content_type
      file = received_image.tempfile

      stream = MultiPartFormDataStream.new
      stream.add_form('user_baas_id', parameters[:user_baas_id])
      stream.add_form('order', parameters[:creation_image][:order])
      stream.add_file('image', original_filename, content_type, file)

      req.body_stream = stream
      req['Content-Length'] = stream.size
      req['Content-Type'] = stream.content_type
    end
  end

  def show_creation_image(params)
  end

  def update_creation_image(params)
    send_put("/creation_images/#{params[:id]}", params.except(:id))
  end

  def delete_creation_image(params)
    send_delete("/creation_images/#{params[:id]}", params.except(:id))
  end

  def create_creation_piece(params)
    send_post("/creations/#{params[:creation_id]}/creation_pieces", params) do |req, parameters|
      stream = MultiPartFormDataStream.new

      # string params
      stream.add_form('user_baas_id', parameters[:user_baas_id])
      stream.add_form('name', parameters[:creation_piece][:name])

      # file
      received_file = parameters[:creation_piece][:file]
      if received_file
        stream.add_file('file',
                        received_file.original_filename,
                        received_file.content_type,
                        received_file.tempfile
                       )
      end

      # image
      received_image = parameters[:creation_piece][:image]
      if received_image
        stream.add_file('image',
                        received_image.original_filename,
                        received_image.content_type,
                        received_image.tempfile
                       )
      end

      req.body_stream = stream
      req['Content-Length'] = stream.size
      req['Content-Type'] = stream.content_type
    end
  end

  def update_creation_piece(params)
    send_put("/creation_pieces/#{params[:id]}", params.except(:id))
  end

  def delete_creation_piece(params)
    send_delete("/creation_pieces/#{params[:id]}", params.except(:id))
  end

  def create_creation_tag(params)
    send_post("/creations/#{params[:creation_id]}/creation_tags", params.except(:creation_id))
  end

  def delete_creation_tag(params)
    send_delete("/creation_tags/#{params[:id]}", params.except(:id))
  end

  def create_creation_comment(params)
    send_post("/creations/#{params[:creation_id]}/creation_comments", params.except(:creation_id))
  end

  def create_good(params)
    send_post("/creations/#{params[:creation_id]}/good", params.except(:creation_id))
  end

  def index_good(params)
    send_get("/site_users/#{params[:site_user_id]}/goods", params)
  end

  def delete_good(params)
    send_delete("/creations/#{params[:creation_id]}/good", params.except(:creation_id))
  end

  private

  def send_get(api, params = {}, &_block)
    send(:get, api, params)
  end

  def send_post(api, params = {}, &block)
    if block
      send(:post, api, params) { |r, p| block.call(r, p) }
    else
      send(:post, api, params)
    end
  end

  def send_put(api, params = {}, &block)
    if block
      send(:put, api, params) { |r, p| block.call(r, p) }
    else
      send(:put, api, params)
    end
  end

  def send_delete(api, params = {}, &block)
    if block
      send(:delete, api, params) { |r, p| block.call(r, p) }
    else
      send(:delete, api, params)
    end
  end

  def send(method, api, params, &block)
    Rails.logger.debug "darrest_core_api send method=#{method}, api=#{api}, params=#{params}"

    uri = URI.parse("#{API_BASE}#{api}")
    if method == :get && !params.empty?
      uri.query = params.to_param
    end

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
