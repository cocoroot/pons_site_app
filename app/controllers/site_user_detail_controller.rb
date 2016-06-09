class SiteUserDetailController < ApplicationController
  skip_before_action :verify_access_token

  def index
    @response = {}
    @response['user'] = DarrestCoreApi.new.show_site_user(id: 1)
    @response
  end
end
