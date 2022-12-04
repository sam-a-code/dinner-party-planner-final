import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import FoodInspoCard from "./FoodInspoCard";

function Explore() {
    const [foodInspos, setFoodInspos] = useState([])
    const [exploreDPs, setExploreDPs] = useState([])


    useEffect(() => {
        fetch(`/food_inspos`)
          .then((res) => res.json())
          .then((foodInspos) => setFoodInspos(foodInspos));
      }, []);

    useEffect(() => {
        fetch(`/dinner_parties`)
          .then((res) => res.json())
          .then((exploreDPs) => setExploreDPs(exploreDPs));
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

    return (
        <>
        <h3>Food Inspo</h3>
            <div className="inspo-card-parent">{foodInspoCard}</div>
        </>
    )
}

export default Explore

// console.log(food_inspo.id)
// console.log(food_inspo.food_inspo_name)
// console.log(food_inspo.food_inspo_link)
// console.log(food_inspo.food_image_url)
// console.log(food_inspo.food_inspo_ingredients)
