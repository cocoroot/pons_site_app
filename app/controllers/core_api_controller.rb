class CoreApiController < ApplicationController
  def create_user
  end

  def create_site_user
    # @result = DarrestCoreApi.new.create_site_user(user_id: @user_info.ex_user_id)
  end

  def show_site_user
    @result = DarrestCoreApi.new.show_site_user(id: params[:id])
    render json: @result
  end

  def update_site_user
    args = {
      user_baas_id: user_baas_id,
      site_user: params.require(:site_user).permit(:biography)
    }
    @result = DarrestCoreApi.new.update_site_user(args)
    render json: @result
  end

  #
  # params = {
  #   image: <image_file>
  # }
  def create_site_user_image
    args = {
      user_baas_id: user_baas_id,
      site_user_image: {
        image: params[:image]
      }
    }
    @result = DarrestCoreApi.new.create_site_user_image(args)
    render json: @result
  end

  #
  # params = {
  #   image: <image_file>
  # }
  def create_site_user_header_image
    args = {
      user_baas_id: user_baas_id,
      site_user_header_image: {
        image: params[:image]
      }
    }
    @result = DarrestCoreApi.new.create_site_user_header_image(args)
    render json: @result
  end

  def create_creation
  end

  def show_creation
    @result = DarrestCoreApi.new.show_creation(id: params[:id])
  end

  def update_creation
  end

  def create_creation_image
  end

  def show_creation_image
  end

  def update_creation_image
  end

  def delete_creation_image
  end

  def create_creation_piece
  end

  def update_creation_piece
  end

  def delete_cleation_piece
  end

  def create_creation_tag
  end

  def delete_creation_tag
  end

  def create_creation_comment
  end

  def create_good
  end

  def index_good
  end

  def delete_good
  end
end
