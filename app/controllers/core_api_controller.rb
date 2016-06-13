class CoreApiController < ApplicationController
  def create_user
  end

  def create_site_user
    # @result = DarrestCoreApi.new.create_site_user(user_id: @user_info.ex_user_id)
  end

  def show_site_user
    @result = DarrestCoreApi.new.show_site_user(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    render_json(@result)
  end

  def update_site_user
    @result = DarrestCoreApi.new.update_site_user(
      user_baas_id: user_baas_id,
      site_user: params.require(:site_user).permit(:nickname, :biography)
    )
    render_json(@result)
  end

  def create_site_user_image
    @result = DarrestCoreApi.new.create_site_user_image(
      user_baas_id: user_baas_id,
      site_user_image: {
        image: params[:image]
      })
    render_json(@result)
  end

  def create_site_user_header_image
    @result = DarrestCoreApi.new.create_site_user_header_image(
      user_baas_id: user_baas_id,
      site_user_header_image: {
        image: params[:image]
      })
    render_json(@result)
  end

  def index_creation_created_by_user
    @result = DarrestCoreApi.new.index_creations_created_by_user(
      site_user_id: params.require(:site_user_id),
      page: params[:page]
    )
    render_json(@result)
  end

  def create_creation
  end

  def show_creation
    @result = DarrestCoreApi.new.show_creation(
      id: params[:id]
    )
    render_json(@result)
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

  def index_good_by_user
    @result = DarrestCoreApi.new.index_good(
      site_user_id: params.require(:site_user_id),
      page: params[:page]
    )
    render_json(@result)
  end

  def delete_good
  end

  private

  def render_json(result)
    render json: result
  end
end
