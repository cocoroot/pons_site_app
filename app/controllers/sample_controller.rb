class SampleController < ApplicationController
  skip_before_action :verify_access_token

  def show
  end
end
