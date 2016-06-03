class GitfabController < ApplicationController
  def index
    @response = DarrestCoreApi.new.show_creation(id: 1)
  end
end
