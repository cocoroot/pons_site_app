class LoginController < ApplicationController
  skip_before_action :verify_access_token

  def login
  end
end
