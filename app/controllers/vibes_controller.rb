class VibesController < ApplicationController

  def index
    vibes = Vibe.all
    render json: vibes, status: :ok
  end

  def show
    vibe = Vibe.find(params[:id])
    render json: vibe, status: :ok
  end

  def create
    vibe = Vibe.create!(vibe_params)
    render json: vibe, status: :created
  end

  def update
    vibe = Vibe.find(params[:id])
    vibe.update!(vibe_params)
    render json: vibe, status: :updated
  end

  def destroy
    vibe = Vibe.find(params[:id])
    vibe.destroy
    head :no_content
  end

  private

  def vibe_params
    params.permit(:theme, :decor, :spotify_playlist, :games, :dinner_party_id)
  end
end
