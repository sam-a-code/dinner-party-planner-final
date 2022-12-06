DrinkMenu.destroy_all
FoodMenu.destroy_all
Guest.destroy_all
Vibe.destroy_all
DinnerParty.destroy_all
User.destroy_all


puts "Seeding users"
u1 = User.create(username: "sam1", first_name: "Sam", last_name: "Avery", email: "sam.avery1+1@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
u2 = User.create(username: "sam2", first_name: "Sam2", last_name: "Avery2", email: "sam.avery1+2@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
u3 = User.create(username: "sam3", first_name: "Sam3", last_name: "Avery3", email: "sam.avery1+3@gmail.com", password: "1234", propic_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")

puts "Seeding dinner parties"

dp1 = DinnerParty.create(user_id: u1.id, date: "2022-11-11", location: "My house", time: "7:30PM" )
dp2 = DinnerParty.create(user_id: u1.id, date: "2022-12-12", location: "My house", time: "12:30PM" )
dp3 = DinnerParty.create(user_id: u1.id, date: "2022-01-01", location: "My house", time: "8:30PM" )
dp4 = DinnerParty.create(user_id: u2.id, date: "2023-02-02", location: "My house", time: "5:00PM" )
dp5 = DinnerParty.create(user_id: u3.id, date: "2022-09-09", location: "My house", time: "7:00PM" )
dp6 = DinnerParty.create(user_id: u3.id, date: "2023-10-10", location: "My house", time: "7:30PM" )

puts "Seeding drink menus"

dm1 = DrinkMenu.create(dinner_party_id: dp1.id, recipe_name: "Moscow Mule", recipe_link: "https://www.bonappetit.com/recipe/moscow-mule", ingredients: "Ice cubes, vodka, lime juice, ginger beer, lime wedge")
dm2 = DrinkMenu.create(dinner_party_id: dp2.id, recipe_name: "Moscow Mule", recipe_link: "https://www.bonappetit.com/recipe/moscow-mule", ingredients: "Ice cubes, vodka, lime juice, ginger beer, lime wedge")
dm3 = DrinkMenu.create(dinner_party_id: dp1.id, recipe_name: "French 75", recipe_link: "https://www.bonappetit.com/recipe/french-75-3", ingredients: "Gin, lemon juice, syrup, Champagne")
dm4 = DrinkMenu.create(dinner_party_id: dp3.id, recipe_name: "French 75", recipe_link: "https://www.bonappetit.com/recipe/french-75-3", ingredients: "Gin, lemon juice, syrup, Champagne")
dm5 = DrinkMenu.create(dinner_party_id: dp2.id, recipe_name: "Mezcal Margarita", recipe_link: "https://www.gimmesomeoven.com/mezcal-margaritas-recipe/", ingredients: "Mezcal, Cointreau, lime juice, agave nectar, lime wedge")
dm6 = DrinkMenu.create(dinner_party_id: dp3.id, recipe_name: "Mezcal Margarita", recipe_link: "https://www.gimmesomeoven.com/mezcal-margaritas-recipe/", ingredients: "Mezcal, Cointreau, lime juice, agave nectar, lime wedge")

puts "Seeding food menus"
fm1 = FoodMenu.create(dinner_party_id: dp1.id, recipe_name: "Beet Terrine", recipe_link: "https://www.chefsouschef.com/beet-terrine/", ingredients: "Beets, chevre, basil, garlic, lemon, salt, and pepper")
fm2 = FoodMenu.create(dinner_party_id: dp2.id, recipe_name: "Quiche", recipe_link: "https://sallysbakingaddiction.com/quiche-recipe/", ingredients: "Pie crust, eggs, whole milk, heavy cream, salt and pepper, cheese, addins, toppings ")
fm3 = FoodMenu.create(dinner_party_id: dp3.id, recipe_name: "Slow salmon with Citrus and Herb Salad", recipe_link: "https://www.alisoneroman.com/recipes/slow-salmon-with-citrus-and-herb-salad", ingredients: "salmon, salt and pepper, lemons, blood orange, thyme, olive oil, fresh herbs, lemon juice, flaky sea salt")

puts "seeding guests"

g1 = Guest.create(dinner_party_id: dp1.id, name: "Helen", contact: "fakeemail@gmoil.com", plus_ones: 1, dietary_restrictions: "vegan", rsvp_status: "Yes")
g2 = Guest.create(dinner_party_id: dp1.id, name: "Eden", contact: "fakeemail2@gmoil.com", plus_ones: 0, assigned_dishes: "Dessert", dietary_restrictions: "none", rsvp_status: "Yes")
g2 = Guest.create(dinner_party_id: dp2.id, name: "Hasan", contact: "fakeemail4@gmoil.com", plus_ones: 1, assigned_dishes: "wine", dietary_restrictions: "none", rsvp_status: "Yes")
g3 = Guest.create(dinner_party_id: dp3.id, name: "Mom", contact: "fakeemail3@gmoil.com", plus_ones: 2, dietary_restrictions: "none", rsvp_status: "Yes")

puts "Seeding vibes"

v1 = Vibe.create(dinner_party_id: dp1.id, theme: "brunch", decor: "floral arrangement, cute mimosa glasses, thrifted coffee cups", spotify_playlist: "https://open.spotify.com/playlist/36iTFqQnU5jYIeMEFigv7b?si=d36ed958180f4596")
v2 = Vibe.create(dinner_party_id: dp2.id, theme: "girl's night", decor: "disco ball planters, charcuterie board, face masks", spotify_playlist: "https://open.spotify.com/playlist/37i9dQZF1DX6GwdWRQMQpq?si=c2736505776440cf")
v3 = Vibe.create(dinner_party_id: dp3.id, theme: "a friend visiting", decor: "candles for candlesticks, ice bucket, table runner", spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8")

puts "Seeding food inspo"
fi1 = FoodInspo.create(food_inspo_name: "Sheet Pan Pizza", food_inspo_link: "https://www.alisoneroman.com/recipes/sheet-pan-pizza", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1668029596864-9F0OF78LJILS7UKMCUTN/Screen+Shot+2022-08-19+at+11.00.24+AM.png?format=2500w", food_inspo_ingredients: "1 packet instant dry yeast, 2 tsp honey, 12 tbsp olive oil, 2¼ cups water, 5 cups bread flour (all-purpose flour will also do the trick here, although the dough might be slightly less elastic), 2 tsp kosher salt, 4 garlic cloves, 3 tbsp olive oil (plus more for drizzling), 1 28-ounce can whole peeled plum tomatoes, salt and freshly ground pepper, crushed red pepper flakes")
fi2 = FoodInspo.create(food_inspo_name: "Labneh Dip With Sizzled Scallions and Chile", food_inspo_link: "https://www.alisoneroman.com/recipes/labneh-dip-with-sizzled-scallions-and-chile", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611349274646-UWYQ6M4ZYX3U9VMUWTI1/alison-roman-cooking-labneh-dip-with-sizzled-scallions-and-chile.jpg?format=2500w", food_inspo_ingredients: "⅓ cup olive oil, 4 scallions (or green garlic), 1 tsp red-pepper flakes, 2 tbsp finely chopped fresh cilantro or chives, flaky sea salt, freshly ground black pepper, 2 cups labneh (or full-fat Greek yogurt or sour cream), 2 tbsp fresh lemon juice")
fi3 = FoodInspo.create(food_inspo_name: "Shrimp Cocktail", food_inspo_link: "https://www.alisoneroman.com/recipes/shrimp-cocktail", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631289985582-IYSE9Q0ABK26YIFKJGZ6/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_74d562c9-f8ef-4533-a3c5-7131451f6f42_1600x2000.jpg?format=2500w", food_inspo_ingredients: "1 ½ cups ketchup, 2 tbsp fresh lemon juice, 2–3 tbsp yuzu kosho (or other hot sauce), 2–3 tbsp Worcestershire sauce, salt and freshly ground black pepper, 3–4 tbsp horseradish, 2–3 pounds large raw + unpeeled shrimp, 1 large onion, black peppercorns, 3 lemons")
fi4 = FoodInspo.create(food_inspo_name: "Baked Potato Bar", food_inspo_link: "https://www.alisoneroman.com/recipes/baked-potato-bar", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1651508133271-AMRLDUCILVZS9IA4QL9Z/2018_09_24_POTATOBAR_0384.jpg?format=1500w", food_inspo_ingredients: "4–10 medium russet potatoes, canola oil, salt and freshly ground black pepper, sour cream, chives and/or scallions, unsalted butter (preferably at room temperature), flaky sea salt and coarsely ground black pepper, trout or salmon roe (optional), fresh dill and/or parsley")
fi5 = FoodInspo.create(food_inspo_name: "Caramelized Shallot Pasta", food_inspo_link: "https://www.alisoneroman.com/recipes/caramelized-shallot-pasta", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1633638883545-F4GWSFF2A5BM6A0NE7OH/merlin_167079174_d93b9a13-92d0-449f-a013-0f2686b8d653-superJumbo.jpg?format=2500w", food_inspo_ingredients: "¼ cup olive oil, 6 large shallots, 5 garlic cloves, Kosher salt and freshly ground black pepper, 1 tsp red-pepper flakes, 1 (2-ounce) can anchovy fillets (about 12), 1 6-ounce can of tomato paste, 10 ounces pasta, 1 cup parsley, flaky sea salt")
fi6 = FoodInspo.create(food_inspo_name: "Blanched Green Beans with Scallion and Soy", food_inspo_link: "https://www.alisoneroman.com/recipes/blanched-green-beans-with-scallion-and-soy", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1633628347728-FR1L28F12KAJS5U9C5JS/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_73541a44-b7af-4749-be0a-ee02df478728_1537x2049-1.jpg?format=1500w", food_inspo_ingredients: "½ pounds green beans, Kosher salt, ¼ cup soy sauce or tamari, 2 tsp fish sauce, 2 tbsp fresh lime or lemon juice, 6 scallions, freshly ground black pepper, olive oil, toasted sesame oil, chili oil")
fi10 = FoodInspo.create(food_inspo_name: "A Very Good Lasagna", food_inspo_link: "https://www.alisoneroman.com/recipes/a-very-good-lasagna", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1639505176053-0JNDVF4JUM9PCF6AQEQM/18-09-22_ITALIANAMERICAN_0415.jpg?format=2500w", food_inspo_ingredients: "2 tbsp olive oil, 1 large yellow onion, 4 cloves garlic, 6 anchovy fillets, Kosher salt and freshly ground black pepper, 2 tbsp tomato paste, 1 28-ounce can whole peeled tomatoes, 1 28-ounce can crushed tomatoes, 1½ pounds fresh mozzarella, grated or shredded, 16 ounces (2 cups) whole-milk ricotta, 1 cup coarsely grated Parmesan, ⅓ cup heavy cream, Kosher salt and freshly ground black pepper, 1 garlic clove, 1 pound dried lasagna noodles (not the no-boil variety), olive oil")
fi7 = FoodInspo.create(food_inspo_name: "Caramelized Maple Tart", food_inspo_link: "https://www.alisoneroman.com/recipes/caramelized-maple-tart", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/815e7d4c-488c-4deb-85de-ded5ee558aff/1763+CB+131B+ALISON+ROMAN+SWEET+ENOUGH+056+CARAMEL_MAPLE_TART_252.jpg?format=2500w", food_inspo_ingredients: "1 1/3 cups all-purpose flour, 2/3 cup powdered sugar, 1 1/2 tsp kosher salt, 1 1/2 sticks unsalted butter, 1/2 cup maple syrup, 1/4 tsp ground cinnamon (optional), 1 cup heavy cream, 1 large egg, 1 large egg yolk, 1 tbsp, 1/2 tsp, whipped cream, maple Syrup (optional), flaky sea salt")
fi8 = FoodInspo.create(food_inspo_name: "Little Gems with Garlicky Lemon and Pistachio", food_inspo_link: "https://www.alisoneroman.com/recipes/little-gems-with-garlicky-lemon-and-pistachio", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1638894256509-4YLY88J4VZBNSAAZQURL/2018_09_20_LITTLEGEMS_0187.jpg?format=2500w", food_inspo_ingredients: "2 lemons, ½ cup raw pistachios, almonds, or walnuts, 1 garlic clove,  ¼ cup olive oil, Kosher salt and freshly ground black pepper, 4–6 heads of Little Gem lettuce (1½–2 pounds) or 1 large head of romaine or iceberg, ½ cup fresh parsley, ½ cup fresh chopped chives, ¼ cup fresh dill, Flaky sea salt")
fi15 = FoodInspo.create(food_inspo_name: "Fancy Citrusy Olives", food_inspo_link: "https://www.alisoneroman.com/recipes/fancy-citrusy-olives", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1651505844839-CGAPC8Z097PDNUMRLJZK/Jul+15+2018_SPRITZ_OLIVES_024.jpg?format=1500w", food_inspo_ingredients: "1 lemon, 1 orange, 1⁄2 cup olive oil, 4 whole chiles de arbol, or 1⁄2 tsp crushed red pepper flakes Peel of 1 grapefruit, 1 pound unpitted Castelvetrano olives")
fi9 = FoodInspo.create(food_inspo_name: "Tangy Grilled Hot Wings", food_inspo_link: "https://www.alisoneroman.com/recipes/tangy-grilled-hot-wings", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1668034184234-SFGT5T55ETD47RIV32VT/Screen+Shot+2022-11-09+at+5.49.39+PM.png?format=2500w", food_inspo_ingredients: "2 pounds wings, Kosher salt, freshly ground black pepper, 1 cup Frank’s RedHot hot sauce, ¼ cup Valentina or other hot sauce of your choosing, 6 tbsp unsalted butter, 2 tbsp white distilled vinegar, 1–2 tbsp canola oil")
fi13 = FoodInspo.create(food_inspo_name: "Creamy Cauliflower Pasta With Pecorino Bread Crumbs", food_inspo_link: "https://www.alisoneroman.com/recipes/creamy-cauliflower-pasta-with-pecorino-bread-crumbs", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611365309578-3CFKJVW857KNBSH7ZU2X/alison-roman-cooking-creamy-cauliflower-pasta-pecorino-bread-crumbs.jpg?format=2500w", food_inspo_ingredients: "Kosher salt and black pepper, 8 ounces rigatoni or ziti, 6 tbsp olive oil, ¾ cup fresh coarse or panko bread crumbs, ½ cup pecorino cheese, 1 large shallot, 1 medium head cauliflower (about 2 pounds), 1 cup heavy cream, 1 tbsp lemon zest, ½ cup finely chopped chives, red-pepper flakes (optional)")
fi16 = FoodInspo.create(food_inspo_name: "Charcuterie Board", food_inspo_link: "https://www.purewow.com/food/charcuterie-board-recipes", food_image_url: "https://publish.purewow.net/wp-content/uploads/sites/2/2020/04/charcuterie-board-ideas-summer-charcuterie-snack-board-recipe.jpg?fit=728%2C921", food_inspo_ingredients: "Whatever you'd like to include! Make sure to think about: cheeses (hard and soft), meats (who doesn't love prosciutto and soppressata?), crackers or crositini, jam (sometimes ya wanna add something sweet), and maybe some grapes for flair")
fi11 = FoodInspo.create(food_inspo_name: "Tangy Braised Short Ribs", food_inspo_link: "https://www.alisoneroman.com/recipes/tangy-braised-short-ribs", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611256246408-0HIT84APUFZ5R5QSAV61/alison-roman-cooking-tangy-braised-short-ribs.jpg?format=2500w", food_inspo_ingredients: "5 pounds bone-in short ribs, at least 1 1/2-inch thick, cut into single bone portions (or 3 1/2 to 4 pounds boneless, at least 1 1/2-inch thick), Kosher salt and freshly ground black pepper, 3 tbsp vegetable or canola oil, 2 large yellow onions, quartered, 2 heads garlic, 3 tbsp honey, ½ cup apple cider vinegar, ½ cup soy sauce or tamari, 4 cups chicken broth, 4 thyme sprigs, 2 cups parsley, ½ bunch chives, Flaky sea salt, 3 lemons")
fi12 = FoodInspo.create(food_inspo_name: "Sticky Cinnamon Rolls", food_inspo_link: "https://www.alisoneroman.com/recipes/sticky-cinnamon-rolls", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631288983903-MLDKGJW1AEQ711IP8BQR/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_5622dfdf-1bd5-4194-a69b-c8ad2da04400_3024x4032.jpg?format=2500w", food_inspo_ingredients: "1 cup whole milk or buttermilk, ¼ cup sugar, 2 ¼ tsp active dry yeast (1 envelope), 3 ¾ cups all-purpose flour, 1 ½ tsp baking powder, 1 ½ tsp kosher salt, 2 large eggs, 1 stick (½ cup) unsalted butter, 1 cup light brown sugar, ¾ tsp kosher salt, 1 tbsp ground cinnamon, ½ cup (1 stick) unsalted butter, non-stick spray (optional), ⅔ cup maple syrup, flaky salt (optional)")
fi14 = FoodInspo.create(food_inspo_name: "Pasta Salad with Peas and Parmesan", food_inspo_link: "https://www.alisoneroman.com/recipes/pasta-salad-with-peas-and-parmesan", food_image_url: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1653668361570-90BM7B8EGCA6I3FDLFXF/52EFA095-EC93-4875-AEEB-5B4DA68D4181.jpg?format=2500w", food_inspo_ingredients: "12–16 oz. short or small-ish pasta (such as cavatappi, small shells, rigatoni, or fusilli), Kosher salt, 1 garlic clove, 2 lemons, 1 bunch scallions, 1/3 cup olive oil, freshly ground black pepper, 10–12 ounces snap peas, 1–2 cups peas, 4 oz. parmesan, 1–2 cups herbs, 1–2 cups pea shoots (use parsley tender stems and leaves if you can't find pea shoots)")




puts "Seeding drinks inspo"
fi10 = DrinkInspo.create(drink_inspo_name: "Mimosa", drink_inspo_link: "https://www.loveandlemons.com/mimosa-recipe/", drink_image_url: "https://images.unsplash.com/photo-1631776867527-3bb2ba0a0ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", drink_inspo_ingredients: "Champagne, prosecco or cava, orange juice")
fi12 = DrinkInspo.create(drink_inspo_name: "Paloma", drink_inspo_link: "https://www.bonappetit.com/recipe/paloma", drink_image_url: "https://assets.bonappetit.com/photos/62cdd8cedc3e934b224d8fb5/1:1/w_1920,c_limit/0712-paloma-lede.jpg", drink_inspo_ingredients: "Kosher salt, 1 grapefruit wedge, 2 oz. fresh grapefruit juice (¼ cup), ½ oz. fresh lime juice (1 tbsp), 1 tsp sugar, 2 oz. mezcal or tequila (¼ cup), 2 oz. club soda (¼ cup)")
fi13 = DrinkInspo.create(drink_inspo_name: "Michelada", drink_inspo_link: "https://chicanoeats.com/michelada/", drink_image_url: "https://i0.wp.com/chicanoeats.com/wp-content/uploads/2022/07/chicano-eats-16606-Edit.jpg?resize=819%2C1024&ssl=1", drink_inspo_ingredients: "2 1/2 Cups Clamato Juice (or sub with Tomato Juice), 4 Tbsp Lime Juice, 3 Tbsp Hot Sauce, 2 Tbsp Worcestershire Sauce, 2 Tsp Maggi Jugo Seasoning Sauce (or sub with Soy Sauce), 1/4 Cup Tajin, 6 Mexican Lagers (Like Corona or Modelo), Lime Rounds")
fi15 = DrinkInspo.create(drink_inspo_name: "Espresso Martini", drink_inspo_link: "https://www.seriouseats.com/the-martini-recipe", drink_image_url: "https://images.absolutdrinks.com/drink-images/Raw/Absolut/c154b73d-dc7c-4079-854f-268af80942c2.jpg?imwidth=750", drink_inspo_ingredients: "Ice Cubes, 1⅓ Parts Absolut Vodka, ⅔ Part Kahlúa, ⅔ Part Espresso, 3 Whole Coffee Beans")
fi1 = DrinkInspo.create(drink_inspo_name: "Mezcal Mule", drink_inspo_link: "https://www.simplyrecipes.com/mezcal-mule-recipe-5270613", drink_image_url: "https://www.simplyrecipes.com/thmb/ZpCocVH0NQBmqYt3fLjQaLW_NJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mezcal-Mule-LEAD-04-521f5eb3b31a48b3848d08c3a63ff211.jpg", drink_inspo_ingredients: "2 ounces mezcal, 3/4 ounce freshly squeezed lime juice (from about 1 medium lime), 5 ounces ginger beer, Lime wedge, Candied ginger")
fi2 = DrinkInspo.create(drink_inspo_name: "French 75", drink_inspo_link: "https://www.bonappetit.com/recipe/french-75-3", drink_image_url: "https://assets.bonappetit.com/photos/62ba2e0611962b77c2aaccb5/1:1/w_2240,c_limit/0627-french75-recipe-lede.jpg", drink_inspo_ingredients: "1½ ounces gin, such as Hendrick's, ¾ ounce fresh lemon juice, ¾ ounce simple syrup, 2 ounces Champagne, Long spiral lemon twist (for serving)")
fi11 = DrinkInspo.create(drink_inspo_name: "Caipirinha", drink_inspo_link: "https://www.thespruceeats.com/caipirinha-recipe-759290", drink_image_url: "https://www.thespruceeats.com/thmb/wW9ZGyAaKmf82GBRVj9Vu4guZYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/caipirinha-recipe-759290-hero-01-d599e690fbae40238c20a6137ebb52ef.jpg", drink_inspo_ingredients: "1/2 lime, 1 1/2 to 2 1/2 tsp superfine sugar, to taste, 2 ounces​ cachaça, Lime wheel, for garnish")
fi3 = DrinkInspo.create(drink_inspo_name: "Old Fashioned", drink_inspo_link: "https://www.simplyrecipes.com/recipes/old_fashioned_cocktail/", drink_image_url: "https://www.simplyrecipes.com/thmb/1uY89KYA3P7bnGEj-aAhmDyHaj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__01__Old-Fashioned-Cocktail-LEAD-1-d1f215fa53e644758cc93a219e0dc468.jpg", drink_inspo_ingredients: "2 ounces bourbon or rye whiskey, 1/4 ounce simple syrup, 2 dashes Angostura bitters, Orange peel or Luxardo cherry, for garnish (optional)")
fi4 = DrinkInspo.create(drink_inspo_name: "Margarita", drink_inspo_link: "https://www.bonappetit.com/recipe/margarita", drink_image_url: "https://assets.bonappetit.com/photos/5b69f16006027f654a27cd19/1:1/w_2240,c_limit/ba-margarita-1.jpg", drink_inspo_ingredients: "Kosher salt (for serving), ½ thick lime wheel (for serving), 2 oz. tequila blanco, ¾ oz. fresh lime juice, ¾ oz. simple syrup")
fi6 = DrinkInspo.create(drink_inspo_name: "Mango Mule (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://hips.hearstapps.com/toc.h-cdn.co/assets/15/36/mango_mule.jpg?crop=1.0xw:1xh;center,top&resize=980:*", drink_inspo_ingredients: "4-5 slices of cucumber, 1 oz honey syrup, 1.5 oz mango puree, 1.5 oz fresh lime juice, 1.5 oz ginger beer, Ice")
fi5 = DrinkInspo.create(drink_inspo_name: "Moscow Mule", drink_inspo_link: "https://www.bonappetit.com/recipe/moscow-mule", drink_image_url: "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", drink_inspo_ingredients: "Ice cubes, 2 ounces vodka (¼ cup), ½ ounce fresh lime juice (1 tbsp), ½ cup chilled ginger beer, 1 lime wedge")
fi7 = DrinkInspo.create(drink_inspo_name: "Coconut, Cucumber, Lime, and Mint Cooler (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://hips.hearstapps.com/toc.h-cdn.co/assets/cm/14/37/540fe496b8c50_-_cucumber-cooler-lg.jpg?resize=980:*", drink_inspo_ingredients: "4 cups of coconut water, 2 cucumbers sliced very thinly, .5 cup of lime juice, .25 cup of sugar (optional), .25 cup of chopped mint leaves")
fi8 = DrinkInspo.create(drink_inspo_name: "Watermelon Margarita (Mocktail)", drink_inspo_link: "https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/", drink_image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-virgin-watermelon-margarita-8546-1498061314.jpg?crop=0.983284169124877xw:1xh;center,top&resize=980:*", drink_inspo_ingredients: "1 medium seedless watermelon, cut into chunks, .5 cup fresh lime juice, 4 tsp agave, 5 tbsp sparking water")
fi9 = DrinkInspo.create(drink_inspo_name: "Mojito", drink_inspo_link: "https://www.loveandlemons.com/mojito-recipe/#wprm-recipe-container-49758", drink_image_url: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", drink_inspo_ingredients: "5 mint leaves, more for garnish, 2 ounces white rum, 1 ounce fresh lime juice, ½ ounce simple syrup, Ice, Club soda or sparkling water, Lime slices, for garnish")
# fi14 = DrinkInspo.create(drink_inspo_name: "Martini", drink_inspo_link: "https://www.seriouseats.com/the-martini-recipe", drink_image_url: "https://images.unsplash.com/photo-1638884896143-f1b2501e9a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", drink_inspo_ingredients: "3 ounces dry gin, 1 ounce dry vermouth, 1 cup ice cubes, 3 small olives")


puts "Seeding vibe inspo"
vi1 = VibeInspo.create(vibe_inspo_decor: "flowers, wine glasses, ice bucket, cozy blankets", vibe_inspo_theme:"girl's night", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/37i9dQZF1DX6GwdWRQMQpq?si=c2736505776440cf", vibe_inspos_image: "https://images.unsplash.com/photo-1616043986676-c0ac934f2b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi2 = VibeInspo.create(vibe_inspo_decor: "candlesticks for a dramatic centerpiece, cheeses that you remember to let come to room temperature before guests arrive", vibe_inspo_theme: "no theme – just a good old fashioned dinner party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ?si=960a0828e1044653", vibe_inspo_games: "charades", vibe_inspos_image: "https://images.unsplash.com/photo-1514516870926-20598973e480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80")
vi3 = VibeInspo.create(vibe_inspo_decor: "pizza (duh), sodas, napkins, ranch (for dipping), sundae bar supplies", vibe_inspo_theme: "pizza party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/37i9dQZF1DX186v583rmzp?si=e782da82044f4517", vibe_inspos_image: "https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi4 = VibeInspo.create(vibe_inspo_decor: "mimosa supplies, water (gotta stay hydrated), waffle station supplies", vibe_inspo_theme: "brunch", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")
vi5 = VibeInspo.create(vibe_inspo_decor: "cute teacups, small plates, macarons, doilies", vibe_inspo_theme: "tea party", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=d305c8ef8ab4488c", vibe_inspos_image: "https://images.unsplash.com/photo-1635232349572-aa2bde784d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi6 = VibeInspo.create(vibe_inspo_decor: "funky straws, floaties, tropical drinks, palm tree decals", vibe_inspo_theme: "pool party (whether you have a pool or not)", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/36iTFqQnU5jYIeMEFigv7b?si=d36ed958180f4596", vibe_inspos_image: "https://images.unsplash.com/photo-1501118926561-2d75eefb2628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
vi7 = VibeInspo.create(vibe_inspo_decor: "an iconic housewife drink (Belvedere, soda,and three lemons — in a short glass with carcass out), directions for your guests to recreate their favorite outfit from any of the housewives", vibe_inspo_theme: "real housewives viewing party", vibe_inspos_image: "https://images.unsplash.com/photo-1501118926561-2d75eefb2628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
# vi8 = VibeInspo.create(vibe_inspo_decor: "tableclothes, corn holders, lots of napkins, condiments", vibe_inspo_theme: "BBQ", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/2LGDgAlvxXdiKVBC7cHPKm?si=0224c92ffaea4906", vibe_inspos_image: "https://images.unsplash.com/photo-1623174479658-79fb603acf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
# vi9 = VibeInspo.create(vibe_inspo_decor: "boas, fancy glasses, a cute photo backdrop", vibe_inspo_theme: "old school glamour", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1501118926561-2d75eefb2628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
# vi10 = VibeInspo.create(vibe_inspo_decor: "picnic blanket, picnic basket (to carry all your treats, of course!), bug spray", vibe_inspo_theme: "picnic", vibe_inspo_spotify_playlist: "https://open.spotify.com/playlist/38O5CML4ETFRRUOLcVod7p?si=cd36cb3e3ccf40d8", vibe_inspos_image: "https://images.unsplash.com/photo-1615199348139-00bf10980769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80")


puts "Done seeeding!"


