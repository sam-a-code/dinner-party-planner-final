class CreateVibeInspos < ActiveRecord::Migration[7.0]
  def change
    create_table :vibe_inspos do |t|
      t.string :vibe_inspo_decor
      t.string :vibe_inspo_theme
      t.string :vibe_inspo_spotify_playlist
      t.string :vibe_inspo_games

      t.timestamps
    end
  end
end
