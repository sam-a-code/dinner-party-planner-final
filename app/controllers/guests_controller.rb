class GuestsController < ApplicationController

  def index
    guests = Guest.all
    render json: guests, status: :ok
  end

  def show
    guest = Guest.find(params[:id])
    render json: guest, status: :ok
  end

  def create
    guest = Guest.create!(guest_params)
    render json: guest, status: :created
  end

  def update
    guest = Guest.find(params[:id])
    guest.update!(guest_params)
    render json: guest, status: :updated
  end

  def destroy
    guest = Guest.find(params[:id])
    guest.destroy
    head :no_content
  end

  private

  def guest_params
    params.permit(:name, :contact, :plus_ones, :dietary_restrictions, :assigned_dishes, :rsvp_status)
  end

end
