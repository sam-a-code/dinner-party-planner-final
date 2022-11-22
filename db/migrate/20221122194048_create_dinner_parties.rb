class CreateDinnerParties < ActiveRecord::Migration[7.0]
  def change
    create_table :dinner_parties do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :date
      t.string :location

      t.timestamps
    end
  end
end
