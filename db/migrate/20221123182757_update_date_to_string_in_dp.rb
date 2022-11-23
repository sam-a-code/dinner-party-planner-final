class UpdateDateToStringInDp < ActiveRecord::Migration[7.0]
  def change
    change_column :dinner_parties, :date, :string
  end
end
