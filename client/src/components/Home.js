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
            <h1>Add a DP checklist</h1>
            <h1>Walk through site</h1>
            {drinkCards}
        </div>
    )
}

export default Home
