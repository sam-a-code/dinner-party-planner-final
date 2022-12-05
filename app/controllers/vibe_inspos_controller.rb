class VibeInsposController < ApplicationController
  skip_before_action :authorized_user, only: [:create, :index, :show]

  def index
    vibe_inspos = VibeInspo.all
    render json: vibe_inspos, status: :ok
  end

  def show
    vibe_inspo = VibeInspo.find(params[:id])
    render json: vibe_inspo, status: :ok
  end

  def create
    vibe_inspo = VibeInspo.create!(vibe_inspo_params)
    render json: vibe_inspo, status: :created
  end

  def update
    vibe_inspo = VibeInspo.find(params[:id])
    vibe_inspo.update!(vibe_inspo_params)
    render json: vibe_inspo, status: :updated
  end

  def destroy
    vibe_inspo = VibeInspo.find(params[:id])
    vibe_inspo.destroy
    head :no_content
  end

  private

  def vibe_inspo_params
    params.permit(:vibe_inspo_decor, :vibe_inspo_theme, :vibe_inspo_games, :vibe_inspo_spotify_playlist, :vibe_inspos_image)
  end
end
