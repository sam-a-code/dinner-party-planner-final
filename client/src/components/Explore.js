import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import FoodInspoCard from "./FoodInspoCard";
import DrinkInspoCard from "./DrinkInspoCard";

function Explore() {
    const [exploreDPs, setExploreDPs] = useState([])
    const [foodInspos, setFoodInspos] = useState([])
    const [drinkInspos, setDrinkInspos] = useState([])


    useEffect(() => {
        fetch(`/dinner_parties`)
          .then((res) => res.json())
          .then((exploreDPs) => setExploreDPs(exploreDPs));
      }, []);

    useEffect(() => {
        fetch(`/food_inspos`)
          .then((res) => res.json())
          .then((foodInspos) => setFoodInspos(foodInspos));
      }, []);

    useEffect(() => {
        fetch(`/drink_inspos`)
          .then((res) => res.json())
          .then((drinkInspos) => setDrinkInspos(drinkInspos));
      }, []);




    const foodInspoCard = foodInspos?.map((food_inspo) => {
        return <FoodInspoCard
            key={food_inspo.id}
            name={food_inspo.food_inspo_name}
            link={food_inspo.food_inspo_link}
            image={food_inspo.food_image_url}
            ingredients={food_inspo.food_inspo_ingredients}
            foodInspos={foodInspos}
            exploreDPs={exploreDPs}
            />
    })

    const drinkInspoCard = drinkInspos?.map((drink_inspo) => {
        return <DrinkInspoCard
            key={drink_inspo.id}
            name={drink_inspo.drink_inspo_name}
            link={drink_inspo.drink_inspo_link}
            image={drink_inspo.drink_image_url}
            ingredients={drink_inspo.drink_inspo_ingredients}
            drinkInspos={drinkInspos}
            exploreDPs={exploreDPs}
            />
    })

    return (
        <>
        <h3>Food Inspo</h3>
            <div className="inspo-card-parent">{foodInspoCard}</div>
        <h3>Drink Inspo</h3>
            <div className="inspo-card-parent">{drinkInspoCard}</div>
        </>
    )
}

export default Explore
