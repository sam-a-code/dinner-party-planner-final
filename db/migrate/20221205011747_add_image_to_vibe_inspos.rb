class AddImageToVibeInspos < ActiveRecord::Migration[7.0]
  def change
    add_column :vibe_inspos, :vibe_inspos_image, :string
  end
end
