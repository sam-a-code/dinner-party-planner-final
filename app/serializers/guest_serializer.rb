class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact, :plus_ones, :dietary_restrictions, :assigned_dishes, :rsvp_status
  has_one :dinner_party
end
