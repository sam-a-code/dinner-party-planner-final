class FoodMenu < ApplicationRecord
  belongs_to :dinner_party

  validates :recipe_name, presence: true
  validates :ingredients, presence: true
end
