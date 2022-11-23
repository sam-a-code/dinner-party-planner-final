class VibeSerializer < ActiveModel::Serializer
  attributes :id, :theme, :decor, :spotify_playlist, :games
  has_one :dinner_party
end
