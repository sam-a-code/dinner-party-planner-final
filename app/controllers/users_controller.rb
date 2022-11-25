class UsersController < ApplicationController
  skip_before_action :authorized_user, only: [:create, :index]


  def index
    users = User.all
    render json: users
  end

  def show
    # user = User.find(params[:id])
    render json: current_user, serializer: ProfileSerializer, include: ['dinner_parties', 'dinner_parties.vibes', 'dinner_parties.guests', 'dinner_parties.food_menus', 'dinner_parties.drink_menus'], status: :ok
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
