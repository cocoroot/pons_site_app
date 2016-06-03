# coding: utf-8

ACCESS_KEY = 'D7F2575F-B365-4B30-926E-85334BD176B7'
API_BASE = 'http://localhost:3000'

class DarrestCoreApi
  def create_user(params)
  end

  def create_site_user(params)
  end

  def show_site_user(params)
  end

  def update_site_user(params)
  end

  def create_site_user_image(params)
  end

  def create_site_user_header_image(params)
  end

  def create_creation(params)
    api = "#{API_BASE}/creations"
    uri = URI.parse(api)

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = false

    req = Net::HTTP::Post.new(uri.request_uri)
    req['access_key'] = ACCESS_KEY
    req['Content-Type'] = 'application/json'
    req.body = params.to_json

    #
    # send request
    #
    res = http.request(req)

    #
    # parse response
    #
    JSON.parse(res.body)
  end

  def show_creation(params)
    api = "#{API_BASE}/creations/#{params[:id]}"
    uri = URI.parse(api)

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = false

    req = Net::HTTP::Get.new(uri.request_uri)
    req['access_key'] = ACCESS_KEY
    req['Content-Type'] = 'application/json'

    #
    # send request
    #
    res = http.request(req)

    #
    # parse response
    #
    JSON.parse(res.body)
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
  
  def get(params)
    api = "#{api_base}/creations"
    uri = URI.parse(api)

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = false

    req = Net::HTTP::Post.new(uri.request_uri)
    req['access_key'] = ACCESS_KEY
    req['Content-Type'] = 'application/json'
    req.body = {
      creation: {
        site_user_id: 1,
        title: 'てすとたいとる',
        description: 'てすとしょうさい'
      }
    }.to_json

    #
    # send request
    #
    res = http.request(req)

    #
    # make response
    #
    response = JSON.parse(res.body)

    { response: response, errors: @errors, warnings: @warnings }
  end

end
