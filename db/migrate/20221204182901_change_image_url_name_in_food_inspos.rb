class ChangeImageUrlNameInFoodInspos < ActiveRecord::Migration[7.0]
  def change
    rename_column :food_inspos, :image_url, :food_image_url
  end
end
