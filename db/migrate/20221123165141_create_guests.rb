class CreateGuests < ActiveRecord::Migration[7.0]
  def change
    create_table :guests do |t|
      t.belongs_to :dinner_party, null: false, foreign_key: true
      t.string :name
      t.string :contact
      t.integer :plus_ones
      t.string :dietary_restrictions
      t.string :assigned_dishes
      t.string :rsvp_status

      t.timestamps
    end
  end
end
