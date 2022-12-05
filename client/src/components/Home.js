import { useState, useEffect} from 'react'
function Home() {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch(`/drink_menus`)
          .then((res) => res.json())
          .then((drinks) => setDrinks(drinks));
      }, []);

      const drinkCards = drinks.map((item, i) => {
        const drinkID = item.id
        return (
        <div key={i}>
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    return (
        <div className="homepage-parent">
            <div className='homepage-body'>
            <h1 className="homepage-header homepage-text">Who doesn't love a dinner party?</h1>
            <div className='homepage-text'>
                <h3 >Getting ready to throw a dinner party? Here are some things to think about. <br></br>Click create dinner party to start planning!</h3>
                <ul className='homepage-list'>
                    <li>Pick a date, time, and location</li>
                    <li>Make your guest list and invite your guests</li>
                    <li>Dream up a fantastic menu of food and drinks</li>
                    <ul>
                    <li>Make sure that your menu accomodates your guests whether they are gluten-free/vegan/sober/etc.!</li>
                    <li>Figure out if you'll be asking your guests to bring anything</li>
                    </ul>
                    <li>Think about your dinner party vibe and how you can bring it to life</li>
                    <ul>
                        <li>Are you celebrating a friend's promotion? Then you'll probably want to pick up some flowers and make their favorite dessert. If you're crafty, you might even make some DIY business card holders for your guests</li>
                        <li>If you're hosting a movie night, then you'd obviously have to commit to doing themed appetizers based on the movie</li>
                        <li>Maybe you're doing the all-time-classic: brunch (yes, this still counts as a dinner party). You'll need mimosa supplies, a stunning bagel spread or frittata moment, and napkins for the tears from laughing so hard with your friends</li>
                        </ul>
                    <li>Most importantly, think about creating memorable experiences with people you enjoy, while eating delicious food and drinking snazzy drinks</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home
