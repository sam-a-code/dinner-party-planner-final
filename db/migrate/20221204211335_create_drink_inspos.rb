class CreateDrinkInspos < ActiveRecord::Migration[7.0]
  def change
    create_table :drink_inspos do |t|
      t.string :drink_inspo_name
      t.string :drink_inspo_link
      t.string :drink_inspo_ingredients
      t.string :drink_image_url

      t.timestamps
    end
  end
end
