# coding: utf-8

if Module.const_defined? :DarrestCoreApi
  Object.class_eval { remove_const :DarrestCoreApi }
end

RESPONSES_DIR = "#{Rails.root}/spec/stubs/darrest_core_api/responses"

class DarrestCoreApi
  # def create_user(params)
  # end

  def show_my_info(params)
    response(__method__, [:user_baas_id], params)
  end

  def show_site_user(params)
    response(__method__, [:user_baas_id, :id], params)
  end

  def update_site_user(params)
    response(__method__, [:user_baas_id, :site_user], params)
  end

  def create_site_user_image(params)
    response(__method__, [:user_baas_id, :site_user_image], params)
  end

  def create_site_user_header_image(params)
    response(__method__, [:user_baas_id, :site_user_header_image], params)
  end

  def index_creation_created_by_user(params)
    response(__method__, [:user_baas_id, :site_user_id, :page], params)
  end

  def index_latest_creation(params)
    response(__method__, [:user_baas_id, :offset], params)
  end

  def create_creation(params)
    response(__method__, [:user_baas_id, :creation], params)
  end

  def show_creation(params)
    response(__method__, [:user_baas_id, :id], params)
  end

  def update_creation(params)
    response(__method__, [:user_baas_id, :id, :creation], params)
  end

  def create_creation_image(params)
    response(__method__, [:user_baas_id, :creation_id, :creation_image], params)
  end

  def show_creation_image(params)
    #response(__method__, [:user_baas_id], params)
  end

  def update_creation_image(params)
    response(__method__, [:user_baas_id, :id, :creation_image], params)
  end

  def delete_creation_image(params)
    response(__method__, [:user_baas_id, :id], params)
  end

  def create_creation_piece(params)
    response(__method__, [:user_baas_id, :creation_id, :creation_piece], params)
  end

  def update_creation_piece(params)
    response(__method__, [:user_baas_id, :id, :creation_piece], params)
  end

  def delete_creation_piece(params)
    response(__method__, [:user_baas_id, :id], params)
  end

  def create_creation_tag(params)
    response(__method__, [:user_baas_id, :creation_id, :creation_tag], params)
  end

  def delete_creation_tag(params)
    response(__method__, [:user_baas_id, :id], params)
  end

  def index_creation_comment(params)
    response(__method__, [:user_baas_id, :creation_id, :offset], params)
  end

  def create_creation_comment(params)
    response(__method__, [:user_baas_id, :creation_id, :creation_comment], params)
  end

  def create_good(params)
    response(__method__, [:user_baas_id, :creation_id], params)
  end

  def index_good_by_user(params)
    response(__method__, [:user_baas_id, :site_user_id, :page], params)
  end

  def delete_good(params)
    response(__method__, [:user_baas_id, :creation_id], params)
  end

  private

  def response(method, required_keys, params)
    if required_keys.any? { |key| !params.keys.include?(key) }
      bad_request_response
    else
      success_response(method)
    end
  end

  def success_response(method)
    File.open("#{RESPONSES_DIR}/#{method}.res", 'r') { |file| Marshal.load(file.read) }
  end

  def bad_request_response
    File.open("#{RESPONSES_DIR}/bad_request.res", 'r') { |file| Marshal.load(file.read) }
  end
end
