class CreateFoodInspos < ActiveRecord::Migration[7.0]
  def change
    create_table :food_inspos do |t|
      t.string :food_inspo_name
      t.string :food_inspo_link
      t.string :food_inspo_ingredients

      t.timestamps
    end
  end
end
