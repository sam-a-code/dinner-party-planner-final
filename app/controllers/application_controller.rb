class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized_user

  def current_user
    user = User.find_by(id: session[:user_id])
  end

  def authorized_user
    return render json: {errors: "Not authorized" }, status: :unauthorized unless current_user
  end

end
