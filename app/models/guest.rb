class Guest < ApplicationRecord
  belongs_to :dinner_party

  validates :name, presence: true
  validates :rsvp_status, presence: true
  validates :plus_ones, numericality: true 

end
