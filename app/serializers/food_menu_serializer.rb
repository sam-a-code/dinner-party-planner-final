class FoodMenuSerializer < ActiveModel::Serializer
  attributes :id, :recipe_name, :recipe_link, :ingredients
  has_one :dinner_party
end
