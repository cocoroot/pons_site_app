class CoreApiController < ApplicationController
  before_action :construct_params

  def create_user
  end

  def create_site_user
  end

  def show_site_user
  end

  def update_site_user
  end

  def create_site_user_image
  end

  def create_site_user_header_image
  end

  def create_creation
  end

  def show_creation
    @result = DarrestCoreApi.new.show_creation(id: params[:id])
    #render :show_creation, status: :ok
    render json: @result
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

  private

  def construct_params
    Rails.logger.debug params
  end
end
