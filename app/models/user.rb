class User < ApplicationRecord
  has_many :dinner_parties

  has_secure_password
end
