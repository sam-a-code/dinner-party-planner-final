class DrinkMenusController < ApplicationController

  def index
    drink_menus = DrinkMenu.all
    render json: drink_menus, status: :ok
  end

  def show
    drink_menu = DrinkMenu.find(params[:id])
    render json: drink_menu, status: :ok
  end

  def create
    drink_menu = DrinkMenu.create!(drink_menu_params)
    render json: drink_menu, status: :created
  end

  def update
    drink_menu = DrinkMenu.find(params[:id])
    drink_menu.update!(drink_menu_params)
    render json: drink_menu, status: :updated
  end

  def destroy
    drink_menu = DrinkMenu.find(params[:id])
    drink_menu.destroy
    head :no_content
  end

  private

  def drink_menu_params
    params.permit(:recipe_name, :recipe_link, :ingredients, :dinner_party_id)
  end


end
