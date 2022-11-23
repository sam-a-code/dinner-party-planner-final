class CreateVibes < ActiveRecord::Migration[7.0]
  def change
    create_table :vibes do |t|
      t.belongs_to :dinner_party, null: false, foreign_key: true
      t.string :theme
      t.string :decor
      t.string :spotify_playlist
      t.string :games

      t.timestamps
    end
  end
end
