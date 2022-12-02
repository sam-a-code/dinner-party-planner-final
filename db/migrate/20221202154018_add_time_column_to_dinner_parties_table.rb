class AddTimeColumnToDinnerPartiesTable < ActiveRecord::Migration[7.0]
  def change
    add_column :dinner_parties, :time, :string
  end
end
