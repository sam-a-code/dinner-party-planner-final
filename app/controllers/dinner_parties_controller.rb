class DinnerPartiesController < ApplicationController

  def index
    dinner_parties = DinnerParty.all
    render json: dinner_parties, status: :ok
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def find_parties
    
  end
end
