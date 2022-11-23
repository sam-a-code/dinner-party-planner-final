class CreateFoodMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :food_menus do |t|
      t.belongs_to :dinner_party, null: false, foreign_key: true
      t.string :recipe_name
      t.string :recipe_link
      t.string :ingredients

      t.timestamps
    end
  end
end
