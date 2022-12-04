class AddImageToFoodInspo < ActiveRecord::Migration[7.0]
  def change
    add_column :food_inspos, :image_url, :string
  end
end
