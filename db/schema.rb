# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_23_182757) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dinner_parties", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "date"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_dinner_parties_on_user_id"
  end

  create_table "drink_menus", force: :cascade do |t|
    t.bigint "dinner_party_id", null: false
    t.string "recipe_name"
    t.string "recipe_link"
    t.string "ingredients"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dinner_party_id"], name: "index_drink_menus_on_dinner_party_id"
  end

  create_table "food_menus", force: :cascade do |t|
    t.bigint "dinner_party_id", null: false
    t.string "recipe_name"
    t.string "recipe_link"
    t.string "ingredients"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dinner_party_id"], name: "index_food_menus_on_dinner_party_id"
  end

  create_table "guests", force: :cascade do |t|
    t.bigint "dinner_party_id", null: false
    t.string "name"
    t.string "contact"
    t.integer "plus_ones"
    t.string "dietary_restrictions"
    t.string "assigned_dishes"
    t.string "rsvp_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dinner_party_id"], name: "index_guests_on_dinner_party_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "propic_url"
  end

  create_table "vibes", force: :cascade do |t|
    t.bigint "dinner_party_id", null: false
    t.string "theme"
    t.string "decor"
    t.string "spotify_playlist"
    t.string "games"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dinner_party_id"], name: "index_vibes_on_dinner_party_id"
  end

  add_foreign_key "dinner_parties", "users"
  add_foreign_key "drink_menus", "dinner_parties"
  add_foreign_key "food_menus", "dinner_parties"
  add_foreign_key "guests", "dinner_parties"
  add_foreign_key "vibes", "dinner_parties"
end
