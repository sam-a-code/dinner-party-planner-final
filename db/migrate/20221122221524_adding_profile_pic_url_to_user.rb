class AddingProfilePicUrlToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :propic_url, :string

  end
end
