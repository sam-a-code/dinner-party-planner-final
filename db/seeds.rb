DrinkMenu.destroy_all
FoodMenu.destroy_all
Guest.destroy_all
Vibe.destroy_all
DinnerParty.destroy_all
User.destroy_all


puts "Seeding users"
u1 = User.create(username: "sam1", first_name: "Sam1", last_name: "Avery1", email: "sam.avery1+1@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
u2 = User.create(username: "sam2", first_name: "Sam2", last_name: "Avery2", email: "sam.avery1+2@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
u3 = User.create(username: "sam3", first_name: "Sam3", last_name: "Avery3", email: "sam.avery1+3@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")

puts "Seeding dinner parties"

dp1 = DinnerParty.create(user_id: u1.id, date: "11-11-2022", location: "Sam 1's house" )
dp2 = DinnerParty.create(user_id: u1.id, date: "12-12-2022", location: "Sam 1's house" )
dp3 = DinnerParty.create(user_id: u2.id, date: "01-01-2022", location: "Sam 2's house" )
dp4 = DinnerParty.create(user_id: u2.id, date: "02-02-2023", location: "Sam 2's house" )
dp5 = DinnerParty.create(user_id: u3.id, date: "09-09-2022", location: "Sam 3's house" )
dp6 = DinnerParty.create(user_id: u3.id, date: "10-10-2023", location: "Sam 3's house" )

puts "Seeding drink menus"

dm1 = DrinkMenu.create(dinner_party_id: dp1.id, recipe_name: "Moscow Mule", recipe_link: "https://www.bonappetit.com/recipe/moscow-mule", ingredients: "Ice cubes, vodka, lime juice, ginger beer, lime wedge")
dm2 = DrinkMenu.create(dinner_party_id: dp2.id, recipe_name: "Moscow Mule", recipe_link: "https://www.bonappetit.com/recipe/moscow-mule", ingredients: "Ice cubes, vodka, lime juice, ginger beer, lime wedge")
dm3 = DrinkMenu.create(dinner_party_id: dp1.id, recipe_name: "French 75", recipe_link: "https://www.bonappetit.com/recipe/french-75-3", ingredients: "Gin, lemon juice, syrup, Champagne")
dm4 = DrinkMenu.create(dinner_party_id: dp2.id, recipe_name: "French 75", recipe_link: "https://www.bonappetit.com/recipe/french-75-3", ingredients: "Gin, lemon juice, syrup, Champagne")
dm5 = DrinkMenu.create(dinner_party_id: dp2.id, recipe_name: "Mezcal Margarita", recipe_link: "https://www.gimmesomeoven.com/mezcal-margaritas-recipe/", ingredients: "Mezcal, Cointreau, lime juice, agave nectar, lime wedge")
dm6 = DrinkMenu.create(dinner_party_id: dp3.id, recipe_name: "Mezcal Margarita", recipe_link: "https://www.gimmesomeoven.com/mezcal-margaritas-recipe/", ingredients: "Mezcal, Cointreau, lime juice, agave nectar, lime wedge")

puts "Seeding food menus"
fm1 = FoodMenu.create(dinner_party_id: dp1.id, recipe_name: "Beet Terrine", recipe_link: "https://www.chefsouschef.com/beet-terrine/", ingredients: "Beets, chevre, basil, garlic, lemon, salt, and pepper")
fm2 = FoodMenu.create(dinner_party_id: dp2.id, recipe_name: "Quiche", recipe_link: "https://sallysbakingaddiction.com/quiche-recipe/", ingredients: "Pie crust, eggs, whole milk, heavy cream, salt and pepper, cheese, addins, toppings ")
fm3 = FoodMenu.create(dinner_party_id: dp3.id, recipe_name: "Slow salmon with Citrus and Herb Salad", recipe_link: "https://www.alisoneroman.com/recipes/slow-salmon-with-citrus-and-herb-salad", ingredients: "salmon, salt and pepper, lemons, blood orange, thyme, olive oil, fresh herbs, lemon juice, flaky sea salt")

puts "seeding guests"

g1 = Guest.create(dinner_party_id: dp1.id, name: "Helen", contact: "fakeemail@gmoil.com", plus_ones: 1, dietary_restrictions: "vegan", rsvp_status: "Yes")
g2 = Guest.create(dinner_party_id: dp2.id, name: "Eden", contact: "fakeemail2@gmoil.com", plus_ones: 0, assigned_dishes: "Dessert", dietary_restrictions: "none", rsvp_status: "Yes")
g3 = Guest.create(dinner_party_id: dp3.id, name: "Mom", contact: "fakeemail3@gmoil.com", plus_ones: 2, dietary_restrictions: "none", rsvp_status: "Yes")

puts "Seeding vibes"

v1 = Vibe.create(dinner_party_id: dp1.id, theme: "brunch", decor: "floral", spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8")
v2 = Vibe.create(dinner_party_id: dp2.id, theme: "girl's night", decor: "disco balls", spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8")
v3 = Vibe.create(dinner_party_id: dp3.id, theme: "wolf pack", spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", games: "charades")

puts "Done seeeding!"
