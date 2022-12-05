class DinnerPartiesController < ApplicationController

  def index
    dinner_parties = DinnerParty.where(user_id: current_user.id)
    render json: dinner_parties.order(date: :desc), status: :ok
  end

  # def show
  #   dinner_party = DinnerParty.find(params[:id])
  #   render json: dinner_party, serializer: DinnerPartyViewSerializer, status: :ok
  # end

  #commented out with all of the nested attributes
  def show
    dinner_party = DinnerParty.find(params[:id])
    render json: dinner_party, include: ['vibes', 'vibes.theme', 'vibes.decor', 'vibes.spotify_playlist', 'vibes.games', 'guests', 'guests.name', 'guests.contact', 'guests.plus_ones', 'guests.dietary_restrictions', 'guests.rsvp_status', 'food_menus', 'food_menus.recipe_name', 'food_menus.recipe_link', 'food_menus.ingredients','drink_menus', 'drink_menus.recipe_name', 'drink_menus.recipe_link', 'drink_menus.ingredients'], serializer: DinnerPartyViewSerializer, status: :ok
  end

  def create
    dinner_party = DinnerParty.create!(dinner_party_params)
    render json: dinner_party, status: :created
  end

  def update
    dinner_party = DinnerParty.find(params[:id])
    dinner_party.update!(dinner_party_params)
    render json: dinner_party, status: :ok
  end

  def destroy
    dinner_party = DinnerParty.find(params[:id])
    dinner_party.destroy
    head :no_content
  end

  private

  def dinner_party_params
    params.permit(:date, :location, :time, :user_id)
  end

end
