class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :password, :propic_url

  has_many :dinner_parties
end
