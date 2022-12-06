class GuestCountSerializer < ActiveModel::Serializer
  attributes :id,

  has_many :dinner_parties
  has_many :guests, through: :dinner_parties

  # def yes_guest_array
  #   self.dinner_parties.guests
  # end

  # def total_guests
  #   self.guests.where([rsvp_status: == "Yes"])
  #   OR
  #   yes_guest_array
  #   THEN
  #   unique
  #   count/size
  # end

  # def total_plus_ones
  #   sum yes_guest_array.plus_ones
  # end

end
