class DinnerParty < ApplicationRecord
  belongs_to :user
  has_many :drink_menus, dependent: :destroy
  has_many :food_menus, dependent: :destroy
  has_many :guests, dependent: :destroy
  has_many :vibes, dependent: :destroy

  validates :date, presence: true
  validates :time, presence: true
  validates :location, presence: true
end
