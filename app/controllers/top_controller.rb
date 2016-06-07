class TopController < ApplicationController
  skip_before_action :verify_access_token

  def index
  end
end
