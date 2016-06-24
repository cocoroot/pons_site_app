# coding: utf-8
module ErrorHandlers extend ActiveSupport::Concern

  included do
    rescue_from Exception,                                  with: :emergency_alert
    rescue_from ActionController::RoutingError,             with: :rescue404
    rescue_from ApplicationController::PermissionError,     with: :rescue403
    rescue_from ApplicationController::AuthenticationError, with: :rescue401
  end

  private

  def emergency_alert(e)
    @exception = e
    logger.error e
    logger.error e.backtrace.join("\n")

    create_errors(:not_found, e)
    render 'errors/error500', status: 500
  end

  def rescue401(e)
    @exception = e
    logger.debug e

    create_errors(:not_found, e)
    render 'errors/error401', status: 401
  end

  def rescue403(e)
    @exception = e
    logger.debug e

    create_errors(:not_found, e)
    render 'errors/error403', status: 403
  end

  def rescue404(e)
    @exception = e
    logger.debug e

    create_errors(:not_found, e)
    render 'errors/error404', status: 404
  end

  def create_errors(cause, e)
    @result = { errors: Messages.new, warnings: Messages.new }
    @result[:errors].add(cause, e.message)
  end

end
