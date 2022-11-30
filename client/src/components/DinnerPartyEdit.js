import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment'

function DinnerPartyEdit({}) {
    const {id} = useParams();

    const [dinnerParty, setDinnerParty] = useState([])

    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParty) => setDinnerParty(dinnerParty));
      }, []);

    function handleVibesDelete(vibeID) {
        fetch(`/vibes/${vibeID}`, {
            method: "DELETE",
        })
        const updatedVibes = dinnerParty.vibes.filter(vibe => vibe.id !== vibeID)
        setDinnerParty({...dinnerParty, vibes: updatedVibes})
    }

    function handleGuestDelete(guestID) {
        fetch(`/guests/${guestID}`, {
            method: "DELETE",
        })
        const updatedGuests = dinnerParty.guests.filter(guest => guest.id !== guestID)
        setDinnerParty({...dinnerParty, guests: updatedGuests})
    }

    function handleFoodDelete(foodID) {
        fetch(`/food_menus/${foodID}`, {
            method: "DELETE",
        })
        const updatedFoods = dinnerParty.food_menus.filter(foodMenu => foodMenu.id !== foodID)
        setDinnerParty({...dinnerParty, food_menus: updatedFoods})
    }

    function handleDrinkDelete(drinkID) {
        fetch(`/drink_menus/${drinkID}`, {
            method: "DELETE",
        })
        const updatedDrinks = dinnerParty.drink_menus.filter(drinkMenu => drinkMenu.id !== drinkID)
        setDinnerParty({...dinnerParty, drink_menus: updatedDrinks})
    }


      const mappedVibes = dinnerParty.vibes?.map((item, i) => {
        const vibeID = item.id
        console.log(vibeID)
        return (
        <div key={i} className="edit-card">
        {item.theme? <div>Theme: {item.theme}</div> : null }
        {item.decor? <div>Decor: {item.decor}</div> : null}
        {item.spotify_playlist? <a href={item.spotify_playlist}>Spotify playlist</a> : null}
        {item.games? <div>Games: {item.games}</div> : null}
        <br></br>
        <button onClick={() => handleVibesDelete(vibeID)}>x</button>
         </div>)
    })

    const mappedGuests = dinnerParty.guests?.map((item, i) => {
        const guestID = item.id
        return (
        <div key={i} className="edit-card">
        {item.name? <div>Name: {item.name}</div> : null }
        {item.contact? <div>Contact: {item.contact}</div> : null}
        {item.plus_ones? <div>Plus ones: {item.plus_ones}</div> : null}
        {item.dietary_restrictions? <div>Dietary Restrictions: {item.dietary_restrictions}</div> : null}
        {item.assigned_dishes? <div>Assigned Dishes: {item.assigned_dishes}</div> : null}
        {item.rsvp_status? <div>RSVP Status: {item.rsvp_status}</div> : null}
        <button onClick={() => handleGuestDelete(guestID)}>x</button>
         </div>)
    })

    const mappedFoodMenus = dinnerParty.food_menus?.map((item, i) => {
        const foodID = item.id
        return (
        <div key={i} className="edit-card">
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
        <button onClick={() => handleFoodDelete(foodID)}>x</button>
         </div>)
    })

    const mappedDrinkMenus = dinnerParty.drink_menus?.map((item, i) => {
        const drinkID = item.id
        return (
        <div key={i} className="edit-card">
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
        <button onClick={() => handleDrinkDelete(drinkID)}>x</button>
         </div>)
    })

        const dpDate = dinnerParty.date


    return (
        <div>
            <h3 className="edit-page-text">{dinnerParty.location} <br></br>{moment(dpDate).format("MMMM Do, YYYY")}</h3>
            <h3 className="edit-page-text">Vibes</h3>
            <h3 className="edit-card-parent">{mappedVibes}</h3>
            <button className="edit-dinner-party-button">add some vibes to your party</button>
            <h3 className="edit-page-text">Guests</h3>
            <h3 className="edit-card-parent">{mappedGuests}</h3>
            <button className="edit-dinner-party-button">add to your guest list</button>
            <h3 className="edit-page-text">Food Menus</h3>
            <h3 className="edit-card-parent">{mappedFoodMenus}</h3>
            <button className="edit-dinner-party-button">add an option for your food menu</button>
            <h3 className="edit-page-text">Drink Menus</h3>
            <h3 className="edit-card-parent">{mappedDrinkMenus}</h3>
            <button className="edit-dinner-party-button">add an option for your drink menu</button>
        </div>
    )
}

export default DinnerPartyEdit
