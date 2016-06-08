class GitfabController < ApplicationController

  skip_before_action :verify_access_token

  def index
    @response = DarrestCoreApi.new.show_creation(id: 1)
  end
end
