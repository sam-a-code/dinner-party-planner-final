class DinnerParty < ApplicationRecord
  belongs_to :user
  has_many :drink_menus
  has_many :food_menus
  has_many :guests
  has_many :vibes
end
