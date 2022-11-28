import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function DinnerPartyView({date, location, vibes, drinks, food, guests, currentUser}) {
    const {id} = useParams();
    const [dinnerParty, setDinnerParty] = useState([])
    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParty) => setDinnerParty(dinnerParty));
      }, []);


    const mappedVibes = dinnerParty.vibes?.map((item, i) => {
        return (
        <div key={i}>
        {item.theme? <div>Theme: {item.theme}</div> : null }
        {item.decor? <div>Decor: {item.decor}</div> : null}
        {item.spotify_playlist? <a href={item.spotify_playlist}>Spotify playlist</a> : null}
        {item.games? <div>Games: {item.games}</div> : null}
         </div>)
    })

    const mappedGuests = dinnerParty.guests?.map((item, i) => {
        return (
        <div key={i}>
        {item.name? <div>Name: {item.name}</div> : null }
        {item.contact? <div>Contact info: {item.contact}</div> : null}
        {item.plus_ones? <div>Plus ones: {item.plus_ones}</div> : null}
        {item.dietary_restrictions? <div>Dietary Restrictions: {item.dietary_restrictions}</div> : null}
        {item.assigned_dishes? <div>Assigned Dishes: {item.assigned_dishes}</div> : null}
        {item.rsvp_status? <div>RSVP Status: {item.rsvp_status}</div> : null}
         </div>)
    })

    const mappedFoodMenus = dinnerParty.food_menus?.map((item, i) => {
        return (
        <div key={i}>
        {item.recipe_name? <div>Recipe name: {item.recipe_name}</div> : null }
        {item.recipe_link? <a href={item.recipe_link}>Recipe link</a> : null}
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    const mappedDrinkMenus = dinnerParty.drink_menus?.map((item, i) => {
        return (
        <div key={i}>
        {item.recipe_name? <div>Recipe name: {item.recipe_name}</div> : null }
        {item.recipe_link? <a href={item.recipe_link}>Recipe link</a> : null}
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })




    // const vibeObj = dinnerParty.vibes
    // console.log(vibeObj)
    // for (const [key, value] of Object.entries(vibeObj)){
    //     console.log(`${key} ${value}`)
    // }


    return (
        <>
        <div>{id}</div>
        <h4>Main info</h4>
        <div>{dinnerParty.location}</div>
        <div>{dinnerParty.date}</div>
        <h4>Vibes</h4>
        <div>{mappedVibes}</div>
        <h4>Guests</h4>
        <div>{mappedGuests}</div>
        <h4>Food</h4>
        <div>{mappedFoodMenus}</div>
        <h4>Drinks</h4>
        <div>{mappedDrinkMenus}</div>
        </>
    )
}

export default DinnerPartyView

