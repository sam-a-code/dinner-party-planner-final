class User < ApplicationRecord
  has_many :dinner_parties
  # has_many :guests, through: :dinner_parties

  has_secure_password

  validates :username, uniqueness: true
  validates :username, presence: true
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

end
