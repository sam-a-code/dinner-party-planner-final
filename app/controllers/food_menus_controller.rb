class FoodMenusController < ApplicationController

  def index
    food_menus = FoodMenu.all
    render json: food_menus, status: :ok
  end

  def show
    food_menu = FoodMenu.find(params[:id])
    render json: food_menu, status: :ok
  end

  def create
    food_menu = FoodMenu.create!(food_menu_params)
    render json: food_menu, status: :created
  end

  def update
    food_menu = FoodMenu.find(params[:id])
    food_menu.update!(food_menu_params)
    render json: food_menu, status: :updated
  end

  def destroy
    food_menu = FoodMenu.find(params[:id])
    food_menu.destroy
    head :no_content
  end

  private

  def food_menu_params
    params.permit(:recipe_name, :recipe_link, :ingredients)
  end

end
