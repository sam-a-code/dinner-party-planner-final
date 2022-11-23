class UsersController < ApplicationController
  skip_before_action :authorized_user, only: [:create]


  def index
    users = User.all
    render json: users
  end

  def show
    # user = User.find(params[:id])
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :email, :password, :propic_url)
  end


end
