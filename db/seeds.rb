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

dp1 = DinnerParty.create(user_id: u1.id, date: "11-11-2022", location: "Sam 1's house", time: "7:30PM" )
dp2 = DinnerParty.create(user_id: u1.id, date: "12-12-2022", location: "Sam 1's house", time: "12:30PM" )
dp3 = DinnerParty.create(user_id: u2.id, date: "01-01-2022", location: "Sam 2's house", time: "8:30PM" )
dp4 = DinnerParty.create(user_id: u2.id, date: "02-02-2023", location: "Sam 2's house", time: "5:00PM" )
dp5 = DinnerParty.create(user_id: u3.id, date: "09-09-2022", location: "Sam 3's house", time: "7:00PM" )
dp6 = DinnerParty.create(user_id: u3.id, date: "10-10-2023", location: "Sam 3's house", time: "7:30PM" )

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

puts "Seeding recipe inspo"
fi1 = FoodInspo.create(food_inspo_name: "Sheet Pan Pizza", food_inspo_link: "https://www.alisoneroman.com/recipes/sheet-pan-pizza", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1668029596864-9F0OF78LJILS7UKMCUTN/Screen+Shot+2022-08-19+at+11.00.24+AM.png?format=2500w", food_inspo_ingredients: "1(¼ ounce)packet instant dry yeast, 2 teaspoons honey, 12 tablespoons olive oil, plus lots more for coating the bowl and pan, 2¼ cups warm-ish water, 5 cups bread flour (all-purpose flour will also do the trick here, although the dough might be slightly less elastic), plus more for the work surface, 2 teaspoons kosher salt, 4 garlic cloves, 3 tablespoons olive oil (plus more for drizzling), 1 28-ounce can whole peeled plum tomatoes, Kosher salt and freshly ground pepper, Crushed red pepper flakes")
fi2 = FoodInspo.create(food_inspo_name: "Labneh Dip With Sizzled Scallions and Chile", food_inspo_link: "https://www.alisoneroman.com/recipes/labneh-dip-with-sizzled-scallions-and-chile", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611349274646-UWYQ6M4ZYX3U9VMUWTI1/alison-roman-cooking-labneh-dip-with-sizzled-scallions-and-chile.jpg?format=2500w", food_inspo_ingredients: "⅓ cup olive oil, 4 scallions (or green garlic), white and light green parts, thinly sliced, 1 teaspoon red-pepper flakes, 2 tablespoons finely chopped fresh cilantro (leaves and tender stems) or chives, plus more for garnish, Flaky sea salt, Freshly ground black pepper, 2 cups labneh, full-fat Greek yogurt or sour cream, 2 tablespoons fresh lemon juice")
fi3 = FoodInspo.create(food_inspo_name: "Shrimp Cocktail", food_inspo_link: "https://www.alisoneroman.com/recipes/shrimp-cocktail", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631289985582-IYSE9Q0ABK26YIFKJGZ6/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_74d562c9-f8ef-4533-a3c5-7131451f6f42_1600x2000.jpg?format=2500w", food_inspo_ingredients: "1 ½ cups Heinz ketchup, 2 tablespoons fresh lemon juice, plus more to taste, 2–3 tablespoons yuzu kosho, chili paste or other hot sauce, plus more to taste, 2–3 tablespoons Worcestershire sauce, Kosher salt and freshly ground black pepper, 3–4 tablespoons freshly grated or prepared horseradish, 2–3 pounds large raw, unpeeled shrimp, Kosher salt, 1 large onion, quartered, A handful of black peppercorns, 3 lemons")
fi4 = FoodInspo.create(food_inspo_name: "Caramelized Shallot Pasta", food_inspo_link: "https://www.alisoneroman.com/recipes/caramelized-shallot-pasta", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1633638883545-F4GWSFF2A5BM6A0NE7OH/merlin_167079174_d93b9a13-92d0-449f-a013-0f2686b8d653-superJumbo.jpg?format=2500w", food_inspo_ingredients: "¼ cup olive oil, 6 large shallots, very thinly sliced, 5 garlic cloves, 4 thinly sliced, 1 finely chopped, Kosher salt and freshly ground black pepper, 1 teaspoon red-pepper flakes, plus more to taste, 1 (2-ounce) can anchovy fillets (about 12), drained, 1 (4.5-ounce) tube or (6-ounce) can of tomato paste (about 1/2 to 3/4 cup), 10 ounces pasta, 1 cup parsley, leaves and tender stems, finely chopped, Flaky sea salt")
fi5 = FoodInspo.create(food_inspo_name: "Pasta Salad with Peas and Parmesan", food_inspo_link: "https://www.alisoneroman.com/recipes/pasta-salad-with-peas-and-parmesan", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1653668361570-90BM7B8EGCA6I3FDLFXF/52EFA095-EC93-4875-AEEB-5B4DA68D4181.jpg?format=2500w", food_inspo_ingredients: "12–16 oz. short or small-ish pasta, such as cavatappi, small shells, rigatoni, fusilli, Kosher salt, 1 garlic clove, finely grated, 2 lemons, zested and juiced, 1 bunch scallions, thinly sliced, 1/3 cup olive oil, Freshly ground black pepper, 10–12 ounces snap peas, halved lengthwise, 1–2 cups peas (fresh and blanched or frozen and thawed, 4 oz. parmesan, pecorino or other hard, salty cheese, coarsely chopped, 1–2 cups herbs, such as parsley, basil or tarragon, 1–2 cups pea shoots, if available, parsley tender stems and leaves, if not")

puts "Done seeeding!"
