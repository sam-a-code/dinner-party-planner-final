class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authorized_user

  def current_user
    user = User.find_by(id: session[:user_id])
  end

  def authorized_user
    return render json: {errors: "Not authorized" }, status: :unauthorized unless current_user
  end

  def render_not_found error
    render json: {error: "#{error.model} not found"}, status: :not_found
  end

  def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
