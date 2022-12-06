import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import FoodInspoCard from "./FoodInspoCard";
import DrinkInspoCard from "./DrinkInspoCard";
import VibeInspoCard from "./VibeInspoCard";

function Explore() {
    const [exploreDPs, setExploreDPs] = useState([])
    const [foodInspos, setFoodInspos] = useState([])
    const [drinkInspos, setDrinkInspos] = useState([])
    const [vibeInspos, setVibeInspos] = useState([])

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

    useEffect(() => {
        fetch(`/vibe_inspos`)
          .then((res) => res.json())
          .then((vibeInspos) => setVibeInspos(vibeInspos));
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

    const vibeInspoCard = vibeInspos?.map((vibe_inspo) => {
        return <VibeInspoCard
            key={vibe_inspo.id}
            theme={vibe_inspo.vibe_inspo_theme}
            decor={vibe_inspo.vibe_inspo_decor}
            games={vibe_inspo.vibe_inspo_games}
            image={vibe_inspo.vibe_inspos_image}
            spotify_playlist={vibe_inspo.vibe_inspo_spotify_playlist}
            vibeInspos={vibeInspos}
            exploreDPs={exploreDPs}
            />

    })


    return (
        <>
        <h3 className="inspo-header">Vibe Inspo</h3>
            <div className="inspo-card-parent">{vibeInspoCard}</div>
        <h3 className="inspo-header">Food Inspo</h3>
            <div className="inspo-card-parent">{foodInspoCard}</div>
        <h3 className="inspo-header">Drink Inspo</h3>
            <div className="inspo-card-parent">{drinkInspoCard}</div>
        </>
    )
}

export default Explore

//search bar scratch pad 
// const [search, setSearch] = useState([])

 // const searchedVibes = vibeInspos.filter(
    //     (vibe) =>
    //         vibe.theme.toLowerCase().includes(search.toLowerCase()) ||
    //         vibe.decor.toLowerCase().includes(search.toLowerCase()) ||
    //         vibe.spotify_playlist.toLowerCase().includes(search.toLowerCase()) ||
    //         vibe.games.toLowerCase().includes(search.toLowerCase())
    // )

    // <div>
    // <input
    //     type='text'
    //     id='search'
    //     placeholder='Search'
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //     />
    // </div>
