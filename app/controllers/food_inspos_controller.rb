class FoodInsposController < ApplicationController
    def index
      food_inspos = FoodInspo.all
      render json: food_inspos, status: :ok
    end

    def show
      food_inspo = FoodInspo.find(params[:id])
      render json: food_inspo, status: :ok
    end

    def create
      food_inspo = FoodInspo.create!(food_inspo_params)
      render json: food_inspo, status: :created
    end

    def update
      food_inspo = FoodInspo.find(params[:id])
      food_inspo.update!(food_inspo_params)
      render json: food_inspo, status: :updated
    end

    def destroy
      food_inspo = FoodInspo.find(params[:id])
      food_inspo.destroy
      head :no_content
    end

    private

    def food_inspo_params
      params.permit(:food_inspo_name, :food_inspo_link, :food_inspo_ingredients)
    end

end
