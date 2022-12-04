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
        <div className="homepage-text">
            <div className='homepage-body'>
            <h1 className="homepage-header">Who doesn't love a dinner party?</h1>
            <h3>Getting ready to throw a dinner party? Here are some things to think about! Click create dinner party to start planning.</h3>
            <ul>
                <li>Pick a date, time, and location</li>
                <li>Make your guest list and invite your guests</li>
                <li>Dream up a fantastic menu of food and drinks (and figure out if you'll be asking your guests to bring anything)</li>
                <li>Make sure you think about any dietary restrictions your guests might have!</li>
                <li>Think about your dinner party vibe and how you can bring it to life.</li>
                    <li>Are you celebrating a friend's promotion? Then you'll probably want to pick up some flowers and make some DIY business card holders for your guests!</li>
                    <li>If you're hosting a movie night, then you'd obviously have to commit to doing themed appetizers based on the movie.</li>
                    <li>Maybe you're doing the all-time-classic: brunch. You'll need mimosa supplies (make sure to consider if any of your guests would like alcohol-free options!), a stunning bagel spread or frittata moment, and napkins for the tears from laughing so hard.</li>
            </ul>
            </div>
        </div>
    )
}

export default Home
