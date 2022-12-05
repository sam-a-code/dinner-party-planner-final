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

dp1 = DinnerParty.create(user_id: u1.id, date: "2022-11-11", location: "Sam 1's house", time: "7:30PM" )
dp2 = DinnerParty.create(user_id: u1.id, date: "2022-12-12", location: "Sam 1's house", time: "12:30PM" )
dp3 = DinnerParty.create(user_id: u2.id, date: "2022-01-01", location: "Sam 2's house", time: "8:30PM" )
dp4 = DinnerParty.create(user_id: u2.id, date: "2023-02-02", location: "Sam 2's house", time: "5:00PM" )
dp5 = DinnerParty.create(user_id: u3.id, date: "2022-09-09", location: "Sam 3's house", time: "7:00PM" )
dp6 = DinnerParty.create(user_id: u3.id, date: "2023-10-10", location: "Sam 3's house", time: "7:30PM" )

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

puts "Seeding food inspo"
fi1 = FoodInspo.create(food_inspo_name: "Sheet Pan Pizza", food_inspo_link: "https://www.alisoneroman.com/recipes/sheet-pan-pizza", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1668029596864-9F0OF78LJILS7UKMCUTN/Screen+Shot+2022-08-19+at+11.00.24+AM.png?format=2500w", food_inspo_ingredients: "1(¼ ounce)packet instant dry yeast, 2 teaspoons honey, 12 tablespoons olive oil, plus lots more for coating the bowl and pan, 2¼ cups warm-ish water, 5 cups bread flour (all-purpose flour will also do the trick here, although the dough might be slightly less elastic), plus more for the work surface, 2 teaspoons kosher salt, 4 garlic cloves, 3 tablespoons olive oil (plus more for drizzling), 1 28-ounce can whole peeled plum tomatoes, Kosher salt and freshly ground pepper, Crushed red pepper flakes")
fi2 = FoodInspo.create(food_inspo_name: "Labneh Dip With Sizzled Scallions and Chile", food_inspo_link: "https://www.alisoneroman.com/recipes/labneh-dip-with-sizzled-scallions-and-chile", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611349274646-UWYQ6M4ZYX3U9VMUWTI1/alison-roman-cooking-labneh-dip-with-sizzled-scallions-and-chile.jpg?format=2500w", food_inspo_ingredients: "⅓ cup olive oil, 4 scallions (or green garlic), white and light green parts, thinly sliced, 1 teaspoon red-pepper flakes, 2 tablespoons finely chopped fresh cilantro (leaves and tender stems) or chives, plus more for garnish, Flaky sea salt, Freshly ground black pepper, 2 cups labneh, full-fat Greek yogurt or sour cream, 2 tablespoons fresh lemon juice")
fi3 = FoodInspo.create(food_inspo_name: "Shrimp Cocktail", food_inspo_link: "https://www.alisoneroman.com/recipes/shrimp-cocktail", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631289985582-IYSE9Q0ABK26YIFKJGZ6/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_74d562c9-f8ef-4533-a3c5-7131451f6f42_1600x2000.jpg?format=2500w", food_inspo_ingredients: "1 ½ cups Heinz ketchup, 2 tablespoons fresh lemon juice, plus more to taste, 2–3 tablespoons yuzu kosho, chili paste or other hot sauce, plus more to taste, 2–3 tablespoons Worcestershire sauce, Kosher salt and freshly ground black pepper, 3–4 tablespoons freshly grated or prepared horseradish, 2–3 pounds large raw, unpeeled shrimp, Kosher salt, 1 large onion, quartered, A handful of black peppercorns, 3 lemons")
fi4 = FoodInspo.create(food_inspo_name: "Caramelized Shallot Pasta", food_inspo_link: "https://www.alisoneroman.com/recipes/caramelized-shallot-pasta", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1633638883545-F4GWSFF2A5BM6A0NE7OH/merlin_167079174_d93b9a13-92d0-449f-a013-0f2686b8d653-superJumbo.jpg?format=2500w", food_inspo_ingredients: "¼ cup olive oil, 6 large shallots, very thinly sliced, 5 garlic cloves, 4 thinly sliced, 1 finely chopped, Kosher salt and freshly ground black pepper, 1 teaspoon red-pepper flakes, plus more to taste, 1 (2-ounce) can anchovy fillets (about 12), drained, 1 (4.5-ounce) tube or (6-ounce) can of tomato paste (about 1/2 to 3/4 cup), 10 ounces pasta, 1 cup parsley, leaves and tender stems, finely chopped, Flaky sea salt")
fi5 = FoodInspo.create(food_inspo_name: "Pasta Salad with Peas and Parmesan", food_inspo_link: "https://www.alisoneroman.com/recipes/pasta-salad-with-peas-and-parmesan", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1653668361570-90BM7B8EGCA6I3FDLFXF/52EFA095-EC93-4875-AEEB-5B4DA68D4181.jpg?format=2500w", food_inspo_ingredients: "12–16 oz. short or small-ish pasta, such as cavatappi, small shells, rigatoni, fusilli, Kosher salt, 1 garlic clove, finely grated, 2 lemons, zested and juiced, 1 bunch scallions, thinly sliced, 1/3 cup olive oil, Freshly ground black pepper, 10–12 ounces snap peas, halved lengthwise, 1–2 cups peas (fresh and blanched or frozen and thawed, 4 oz. parmesan, pecorino or other hard, salty cheese, coarsely chopped, 1–2 cups herbs, such as parsley, basil or tarragon, 1–2 cups pea shoots, if available, parsley tender stems and leaves, if not")
fi6 = FoodInspo.create(food_inspo_name: "Caramelized Maple Tart", food_inspo_link: "https://www.alisoneroman.com/recipes/caramelized-maple-tart", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/815e7d4c-488c-4deb-85de-ded5ee558aff/1763+CB+131B+ALISON+ROMAN+SWEET+ENOUGH+056+CARAMEL_MAPLE_TART_252.jpg?format=2500w", food_inspo_ingredients: "1 1/3 cups/200g all-purpose flour, 2/3 cup/80g powdered sugar, 1 1/2 teaspoons/6g kosher salt, 1 1/2 sticks/6 ounces/170g unsalted butter, melted and cooled slightly, 1/2 cup maple syrup, 1/4 teaspoon ground cinnamon (optional), 1 cup/230g heavy cream, 1 large egg, 1 large egg yolk, 1 tablespoon/8g cornstarch, 1/2 teaspoon/2g kosher salt, Whipped cream, Maple Syrup (optional), Flaky sea salt")
fi7 = FoodInspo.create(food_inspo_name: "Little Gems with Garlicky Lemon and Pistachio", food_inspo_link: "https://www.alisoneroman.com/recipes/little-gems-with-garlicky-lemon-and-pistachio", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1638894256509-4YLY88J4VZBNSAAZQURL/2018_09_20_LITTLEGEMS_0187.jpg?format=2500w", food_inspo_ingredients: "2 lemons, ½ cup raw pistachios, almonds, or walnuts, finely chopped, 1 garlic clove, finely grated, ¼ cup olive oil, plus more for drizzling, Kosher salt and freshly ground black pepper, 4–6 heads of Little Gem lettuce (1½–2 pounds) or 1 large head of romaine or iceberg, quartered, ½ cup fresh parsley, tender leaves and stems, coarsely chopped, ½ cup fresh chopped chives, ¼ cup fresh dill, coarsely chopped, Flaky sea salt")
fi8 = FoodInspo.create(food_inspo_name: "Tangy Grilled Hot Wings", food_inspo_link: "https://www.alisoneroman.com/recipes/tangy-grilled-hot-wings", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1668034184234-SFGT5T55ETD47RIV32VT/Screen+Shot+2022-11-09+at+5.49.39+PM.png?format=2500w", food_inspo_ingredients: "2 pounds wings, a mix of the wingette and drumette, also known as PARTY WINGS, Kosher salt, freshly ground black pepper, 1 cup Frank’s RedHot hot sauce, ¼ cup Valentina or other hot sauce of your choosing, 6 tablespoons unsalted butter, 2 tablespoons white distilled vinegar, 1–2 tablespoons canola, vegetable or grapeseed oil, Leftover wedge salad dressing, for dipping, Celery sticks, for fun")
fi9 = FoodInspo.create(food_inspo_name: "Meatballs", food_inspo_link: "https://www.alisoneroman.com/recipes/goodbye-meatballs", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631282884214-9VZQ61V0TQXHU3AYM8OR/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_92d1a553-cf83-44d0-9083-42b2bd56fd52_3024x4032.jpg?format=2500w", food_inspo_ingredients: "1 cup whole milk, full fat ricotta cheese, ½ cup finely chopped parsley, ½ cup grated parmesan cheese, ⅓ cup panko bread crumbs, 2 large eggs, 2-3 garlic cloves, finely grated or chopped, ½ medium yellow or red onion, very finely chopped (you’ll use the other half of the onion for the sauce), 2 teaspoons kosher salt, plus more, Freshly ground black pepper and/or crushed red pepper flakes, 1 pound ground beef, 1 pound ground pork, 2 tablespoons olive oil, 1 ½ medium yellow or red onions, finely chopped, 6 garlic cloves, thinly sliced, Kosher salt, freshly ground black pepper, A few anchovies or couple of dashes of fish sauce, if you want, 2–3 tablespoons tomato paste, if you’ve got it, 1 22 ounce can whole, peeled tomatoes, 12 ounces fresh tomatoes, whole if small, halved if medium, chopped if large (these can be cherry tomatoes, plum tomatoes, whatever tomatoes you have, really)")
fi10 = FoodInspo.create(food_inspo_name: "Tangy Braised Short Ribs", food_inspo_link: "https://www.alisoneroman.com/recipes/tangy-braised-short-ribs", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611256246408-0HIT84APUFZ5R5QSAV61/alison-roman-cooking-tangy-braised-short-ribs.jpg?format=2500w", food_inspo_ingredients: "5 pounds bone-in short ribs, at least 1 1/2-inch thick, cut into single bone portions (or 3 1/2 to 4 pounds boneless, at least 1 1/2-inch thick), Kosher salt and freshly ground black pepper, 3 tablespoon vegetable or canola oil, 2 large yellow onions, quartered, 2 heads garlic, halved crosswise, 3 tablespoons honey, ½ cup apple cider vinegar, ½ cup soy sauce or tamari, 4 cups chicken, beef or vegetable broth, 4 thyme sprigs, 2 cups parsley, leaves and tender stems, finely chopped, ½ bunch chives, finely chopped, Flaky sea salt, 3 lemons, halved, for juicing")

puts "Seeding drinks inspo"
fi1 = DrinkInspo.create(drink_inspo_name: "Mezcal Mule", drink_inspo_link: "https://www.simplyrecipes.com/mezcal-mule-recipe-5270613", drink_image_url: "https://www.simplyrecipes.com/thmb/ZpCocVH0NQBmqYt3fLjQaLW_NJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mezcal-Mule-LEAD-04-521f5eb3b31a48b3848d08c3a63ff211.jpg", drink_inspo_ingredients: "2 ounces mezcal, 3/4 ounce freshly squeezed lime juice (from about 1 medium lime), 5 ounces ginger beer, Lime wedge, Candied ginger")
fi2 = DrinkInspo.create(drink_inspo_name: "French 75", drink_inspo_link: "https://www.bonappetit.com/recipe/french-75-3", drink_image_url: "https://assets.bonappetit.com/photos/62ba2e0611962b77c2aaccb5/1:1/w_2240,c_limit/0627-french75-recipe-lede.jpg", drink_inspo_ingredients: "1½ ounces gin, such as Hendrick's, ¾ ounce fresh lemon juice, ¾ ounce simple syrup, 2 ounces Champagne, Long spiral lemon twist (for serving)")
fi3 = DrinkInspo.create(drink_inspo_name: "Old Fashioned", drink_inspo_link: "https://www.simplyrecipes.com/recipes/old_fashioned_cocktail/", drink_image_url: "https://www.simplyrecipes.com/thmb/1uY89KYA3P7bnGEj-aAhmDyHaj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__01__Old-Fashioned-Cocktail-LEAD-1-d1f215fa53e644758cc93a219e0dc468.jpg", drink_inspo_ingredients: "2 ounces bourbon or rye whiskey, 1/4 ounce simple syrup, 2 dashes Angostura bitters, Orange peel or Luxardo cherry, for garnish (optional)")
fi4 = DrinkInspo.create(drink_inspo_name: "Margarita", drink_inspo_link: "https://www.bonappetit.com/recipe/margarita", drink_image_url: "https://assets.bonappetit.com/photos/5b69f16006027f654a27cd19/1:1/w_2240,c_limit/ba-margarita-1.jpg", drink_inspo_ingredients: "Kosher salt (for serving), ½ thick lime wheel (for serving), 2 oz. tequila blanco, ¾ oz. fresh lime juice, ¾ oz. simple syrup")
fi5 = DrinkInspo.create(drink_inspo_name: "Moscow Mule", drink_inspo_link: "https://www.bonappetit.com/recipe/moscow-mule", drink_image_url: "https://assets.bonappetit.com/photos/62aa3f0de942034c2563456f/1:1/w_2240,c_limit/0615-moscow-mule-lede.jpg", drink_inspo_ingredients: "Ice cubes, 2 ounces vodka (¼ cup), ½ ounce fresh lime juice (1 tablespoon), ½ cup chilled ginger beer, 1 lime wedge")
fi6 = DrinkInspo.create(drink_inspo_name: "Mango Mule (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://hips.hearstapps.com/toc.h-cdn.co/assets/cm/14/37/540fe496b8c50_-_cucumber-cooler-lg.jpg?resize=980:*", drink_inspo_ingredients: "4-5 slices of cucumber, 1 oz honey syrup, 1.5 oz mango puree, 1.5 oz fresh lime juice, 1.5 oz ginger beer, Ice")
fi7 = DrinkInspo.create(drink_inspo_name: "Coconut, Cucumber, Lime, and Mint Cooler (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", drink_inspo_ingredients: "4 cups of coconut water, 2 cucumbers sliced very thinly, .5 cup of lime juice, .25 cup of sugar (optional), .25 cup of chopped mint leaves")
fi8 = DrinkInspo.create(drink_inspo_name: "Watermelon Margarita (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-virgin-watermelon-margarita-8546-1498061314.jpg?crop=0.983284169124877xw:1xh;center,top&resize=980:*", drink_inspo_ingredients: "1 medium seedless watermelon, cut into chunks, .5 cup fresh lime juice, 4 tsp agave, 5 tbsp sparking water")

puts "Seedin vibe inspo"
vi1 = VibeInspo.create(vibe_inspo_decor: "flowers, wine glasses, ice bucket, cozy blankets", vibe_inspo_theme:"girl's night", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
vi2 = VibeInspo.create(vibe_inspo_decor: "mimosa supplies, water (gotta stay hydrated), waffle station supplies", vibe_inspo_theme: "brunch", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspo_games: "charades", vibe_inspos_image: "https://images.unsplash.com/photo-1616043986676-c0ac934f2b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi3 = VibeInspo.create(vibe_inspo_decor: "candlesticks for a dramatic centerpiece, cheeses that you remember to let come to room temperature before guests arrive", vibe_inspo_theme: "no theme – just a good old fashioned dinner party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspo_games: "charades", vibe_inspos_image: "https://images.unsplash.com/photo-1514516870926-20598973e480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80")
vi4 = VibeInspo.create(vibe_inspo_decor: "cute teacups, small plates, macarons, doilies", vibe_inspo_theme: "tea party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1635232349572-aa2bde784d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi5 = VibeInspo.create(vibe_inspo_decor: "pizza (duh), sodas, napkins, ranch (for dipping)", vibe_inspo_theme: "pizza party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
# vi6 = VibeInspo.create(vibe_inspo_decor:, vibe_inspo_theme:, vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspo_games:, vibe_inspos_image:)

puts "Done seeeding!"


