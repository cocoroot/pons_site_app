require 'json'

class PonsApiController < ApplicationController
  # after_action :save_response

  def create_user
    # @result = DarrestCoreApi.new.create_user(user_baas_id: user_baas_id)
    # @response = DarrestCoreApi.new.create_site_user(user_id: @user_info.ex_user_id)
    parse_response
  end

  def show_my_info
    @response = DarrestCoreApi.new.show_my_info(
      user_baas_id: user_baas_id
    )
    parse_response
  end

  def show_user
    @response = DarrestCoreApi.new.show_site_user(
      user_baas_id: user_baas_id,
      id: params.require(:id)
    )
    parse_response
  end

  def update_user
    @response = DarrestCoreApi.new.update_site_user(
      user_baas_id: user_baas_id,
      site_user: params.require(:user).permit(:nickname, :biography)
    )
    parse_response
  end

  def create_user_image
    @response = DarrestCoreApi.new.create_site_user_image(
      user_baas_id: user_baas_id,
      site_user_image: {
        image: params[:image]
      })
    parse_response
  end

  def create_user_header_image
    @response = DarrestCoreApi.new.create_site_user_header_image(
      user_baas_id: user_baas_id,
      site_user_header_image: {
        image: params[:image]
      })
    parse_response
  end

  def index_works_created_by_user
    @response = DarrestCoreApi.new.index_creations_created_by_user(
      user_baas_id: user_baas_id,
      site_user_id: params.require(:user_id),
      page: params[:page]
    )
    parse_response
  end

  def index_latest_works
    @response = DarrestCoreApi.new.index_latest_creations(
      user_baas_id: user_baas_id,
      offset: params[:offset]
    )
    parse_response
  end

  def create_work
    @response = DarrestCoreApi.new.create_creation(
      user_baas_id: user_baas_id,
      creation: params[:work]
    )
    parse_response
  end

  def show_work
    @response = DarrestCoreApi.new.show_creation(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    parse_response
  end

  def update_work
    @response = DarrestCoreApi.new.update_creation(
      user_baas_id: user_baas_id,
      id: params[:id],
      creation: params[:work]
    )
    parse_response
  end

  def create_work_image
    @response = DarrestCoreApi.new.create_creation_image(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_image: {
        image: params[:image],
        order: params[:order]
      }
    )
    parse_response
  end

  def show_work_image
  end

  def update_work_image
    @response = DarrestCoreApi.new.update_creation_image(
      user_baas_id: user_baas_id,
      id: params[:id],
      creation_image: params[:work_image]
    )
    parse_response
  end

  def delete_work_image
    @response = DarrestCoreApi.new.delete_creation_image(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    parse_response
  end

  def create_work_piece
    @response = DarrestCoreApi.new.create_creation_piece(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_piece: {
        file: params[:file],
        image: params[:image],
        name: params[:name]
      }
    )
    parse_response
  end

  def update_work_piece
    @response = DarrestCoreApi.new.update_creation_piece(
      user_baas_id: user_baas_id,
      id: params[:id],
      creation_piece: params[:work_piece]
    )
    parse_response
  end

  def delete_work_piece
    @response = DarrestCoreApi.new.delete_creation_piece(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    parse_response
  end

  def create_work_tag
    @response = DarrestCoreApi.new.create_creation_tag(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_tag: params[:work_tag]
    )
    parse_response
  end

  def delete_work_tag
    @response = DarrestCoreApi.new.delete_creation_tag(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    parse_response
  end

  def index_work_comments
    @response = DarrestCoreApi.new.index_creation_comments(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      offset: params[:offset]
    )
    parse_response
  end

  def create_work_comment
    @response = DarrestCoreApi.new.create_creation_comment(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_comment: params[:work_comment]
    )
    parse_response
  end

  def create_like
    @response = DarrestCoreApi.new.create_good(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id]
    )
    parse_response
  end

  def index_likes_by_user
    @response = DarrestCoreApi.new.index_goods_by_user(
      user_baas_id: user_baas_id,
      site_user_id: params.require(:user_id),
      page: params[:page]
    )
    parse_response
  end

  def delete_like
    @response = DarrestCoreApi.new.delete_good(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id]
    )
    parse_response
  end

  private

  def render_json(result)
    render json: result
  end

  # def save_response
  #   #File.open("#{Rails.root}/spec/stubs/responses/darrest_core_api/#{params[:action]}.res", 'w') do |file|
  #   File.open("#{Rails.root}/spec/stubs/responses/darrest_core_api/bad_request.res", 'w') do |file|
  #     res = Marshal.dump(@response).force_encoding("UTF-8")
  #     file.write res
  #   end
  #   # File.open("#{Rails.root}/spec/stubs/responses/darrest_core_api/#{params[:action]}.res", 'r') do |file|
  #   #   obj = Marshal.load(file.read)
  #   #   binding.pry
  #   # end
  # end

  def parse_response
    @result = JSON.parse(@response.body)
    render status: @response.code
  end
end
