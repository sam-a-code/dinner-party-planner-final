class DrinkInsposController < ApplicationController
  skip_before_action :authorized_user, only: [:create, :index, :show]

  def index
    drink_inspos = DrinkInspo.all
    render json: drink_inspos, status: :ok
  end

  def show
    drink_inspo = DrinkInspo.find(params[:id])
    render json: drink_inspo, status: :ok
  end

  def create
    drink_inspo = DrinkInspo.create!(drink_inspo_params)
    render json: drink_inspo, status: :created
  end

  def update
    drink_inspo = DrinkInspo.find(params[:id])
    drink_inspo.update!(drink_inspo_params)
    render json: drink_inspo, status: :updated
  end

  def destroy
    drink_inspo = DrinkInspo.find(params[:id])
    drink_inspo.destroy
    head :no_content
  end

  private

  def drink_inspo_params
    params.permit(:drink_inspo_name, :drink_inspo_link, :drink_inspo_ingredients, :drink_image_url)
  end
end
