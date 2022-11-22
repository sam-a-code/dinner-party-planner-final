class DinnerPartySerializer < ActiveModel::Serializer
  attributes :id, :date, :location
  has_one :user
end
