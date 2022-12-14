class DinnerPartyViewSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :location

  has_one :user
  has_many :vibes
  has_many :guests
  has_many :food_menus
  has_many :drink_menus

end
