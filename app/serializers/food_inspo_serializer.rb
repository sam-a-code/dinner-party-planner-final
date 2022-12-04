class FoodInspoSerializer < ActiveModel::Serializer
  attributes :id, :food_inspo_name, :food_inspo_link, :food_image_url, :food_inspo_ingredients
end
