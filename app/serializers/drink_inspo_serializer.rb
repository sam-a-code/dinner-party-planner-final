class DrinkInspoSerializer < ActiveModel::Serializer
  attributes :id, :drink_inspo_name, :drink_inspo_link, :drink_inspo_ingredients, :drink_image_url
end
