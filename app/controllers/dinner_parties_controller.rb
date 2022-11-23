class DinnerPartiesController < ApplicationController

  def index
    dinner_parties = DinnerParty.all
    render json: dinner_parties, status: :ok
  end

  def show
    dinner_party = DinnerParty.find(params[:id])
    render json: dinner_party, status: :ok
  end

  def create
    dinner_party = DinnerParty.create!(dinner_party_params)
    render json: dinner_party, status: :created
  end

  def update
    dinner_party = DinnerParty.find(params[:id])
    dinner_party.update!(dinner_party_params)
    render json: dinner_party, status: :updated
  end

  def destroy
    dinner_party = DinnerParty.find(params[:id])
    dinner_party.destroy
    head :no_content
  end

  private

  def dinner_party_params
    params.permit(:date, :location)
  end

end
