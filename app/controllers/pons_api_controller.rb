class PonsApiController < ApplicationController
  def create_user
    # @result = DarrestCoreApi.new.create_site_user(user_id: @user_info.ex_user_id)
  end

  def show_my_info
    @result = DarrestCoreApi.new.show_my_info(
      user_baas_id: user_baas_id
    )
    render_json(@result)
  end

  def show_user
    @result = DarrestCoreApi.new.show_site_user(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    render_json(@result)
  end

  def update_user
    @result = DarrestCoreApi.new.update_site_user(
      user_baas_id: user_baas_id,
      site_user: params.require(:user).permit(:nickname, :biography)
    )
    render_json(@result)
  end

  def create_user_image
    logger.debug("CoreApiController params=#{params}")
    @result = DarrestCoreApi.new.create_site_user_image(
      user_baas_id: user_baas_id,
      site_user_image: {
        image: params[:image]
      })
    render_json(@result)
  end

  def create_user_header_image
    @result = DarrestCoreApi.new.create_site_user_header_image(
      user_baas_id: user_baas_id,
      site_user_header_image: {
        image: params[:image]
      })
    render_json(@result)
  end

  def index_work_created_by_user
    @result = DarrestCoreApi.new.index_creations_created_by_user(
      site_user_id: params.require(:user_id),
      page: params[:page]
    )
    render_json(@result)
  end

  def create_work
    @result = DarrestCoreApi.new.create_creation(
      user_baas_id: user_baas_id,
      creation: params[:work]
    )
    render_json(@result)
  end

  def show_work
    @result = DarrestCoreApi.new.show_creation(
      id: params[:id]
    )
    render_json(@result)
  end

  def update_work
    @result = DarrestCoreApi.new.update_creation(
      id: params[:id],
      user_baas_id: user_baas_id,
      creation: params[:work]
    )
    render_json(@result)
  end

  def create_work_image
    @result = DarrestCoreApi.new.create_creation_image(
      creation_id: params[:work_id],
      user_baas_id: user_baas_id,
      creation_image: {
        image: params[:image],
        order: params[:order]
      }
    )
    render_json(@result)
  end

  def show_work_image
  end

  def update_work_image
    @result = DarrestCoreApi.new.update_creation_image(
      id: params[:id],
      user_baas_id: user_baas_id,
      creation_image: params[:work_image]
    )
    render_json(@result)
  end

  def delete_work_image
    @result = DarrestCoreApi.new.delete_creation_image(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    render_json(@result)
  end

  def create_work_piece
    @result = DarrestCoreApi.new.create_creation_piece(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_piece: {
        file: params[:file],
        image: params[:image],
        name: params[:name]
      }
    )
    render_json(@result)
  end

  def update_work_piece
    @result = DarrestCoreApi.new.update_creation_piece(
      user_baas_id: user_baas_id,
      id: params[:id],
      creation_piece: params[:work_piece]
    )
    render_json(@result)
  end

  def delete_cleation_piece
    @result = DarrestCoreApi.new.delete_creation_piece(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    render_json(@result)
  end

  def create_work_tag
    @result = DarrestCoreApi.new.create_creation_tag(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_tag: params[:work_tag]
    )
    render_json(@result)
  end

  def delete_work_tag
    @result = DarrestCoreApi.new.delete_creation_tag(
      user_baas_id: user_baas_id,
      id: params[:id]
    )
    render_json(@result)
  end

  def create_work_comment
    @result = DarrestCoreApi.new.create_creation_comment(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id],
      creation_comment: params[:work_comment]
    )
    render_json(@result)
  end

  def create_good
    @result = DarrestCoreApi.new.create_good(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id]
    )
    render_json(@result)
  end

  def index_good_by_user
    @result = DarrestCoreApi.new.index_good(
      site_user_id: params.require(:user_id),
      page: params[:page]
    )
    render_json(@result)
  end

  def delete_good
    @result = DarrestCoreApi.new.delete_good(
      user_baas_id: user_baas_id,
      creation_id: params[:work_id]
    )
    render_json(@result)
  end

  private

  def render_json(result)
    render json: result
  end
end
