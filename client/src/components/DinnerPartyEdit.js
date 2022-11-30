import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";

function DinnerPartyEdit({date, location, currentUser}) {
    const {id} = useParams();

    const [dinnerParties, setDinnerParties] = useState([])

    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParties) => setDinnerParties(dinnerParties));
      }, []);

      const mappedVibes = dinnerParties.vibes?.map((item, i) => {
        return (
        <div key={i} className="edit-card">
        {item.theme? <div>Theme: {item.theme}</div> : null }
        {item.decor? <div>Decor: {item.decor}</div> : null}
        {item.spotify_playlist? <a href={item.spotify_playlist}>Spotify playlist</a> : null}
        {item.games? <div>Games: {item.games}</div> : null}
        <br></br>
        <button>x</button>
         </div>)
    })

    const mappedGuests = dinnerParties.guests?.map((item, i) => {
        return (
        <div key={i} className="edit-card">
        {item.name? <div>Name: {item.name}</div> : null }
        {item.contact? <div>Contact: {item.contact}</div> : null}
        {item.plus_ones? <div>Plus ones: {item.plus_ones}</div> : null}
        {item.dietary_restrictions? <div>Dietary Restrictions: {item.dietary_restrictions}</div> : null}
        {item.assigned_dishes? <div>Assigned Dishes: {item.assigned_dishes}</div> : null}
        {item.rsvp_status? <div>RSVP Status: {item.rsvp_status}</div> : null}
        <button>x</button>
         </div>)
    })

    const mappedFoodMenus = dinnerParties.food_menus?.map((item, i) => {
        return (
        <div key={i} className="edit-card">
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
        <button>x</button>
         </div>)
    })

    const mappedDrinkMenus = dinnerParties.drink_menus?.map((item, i) => {
        return (
        <div key={i} className="edit-card">
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
        <button>x</button>
         </div>)
    })

    return (
        <div>
            <h3 className="edit-page-text">{dinnerParties.location}: {dinnerParties.date}</h3>
            <h3 className="edit-page-text">Vibes</h3>
            <h3 className="edit-card-parent">{mappedVibes}</h3>
            <button className="edit-dinner-party-button">figure out your party vibes</button>
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
