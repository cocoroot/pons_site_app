class ErrorsController < ApplicationController

  def routing_error
    raise ActionController::RoutingError.new('resource not found.')
  end
end
