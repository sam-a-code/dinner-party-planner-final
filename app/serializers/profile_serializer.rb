class ProfileSerializer < ActiveModel::Serializer
  #attributes of user
  attributes :id, :username, :first_name, :last_name, :email, :propic_url

  has_many :dinner_parties

  # def profile_info
  #   self.dinner_parties.vibes
  # end


end
