import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import moment from 'moment'

function DinnerPartyView({}) {
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
        {item.contact? <div>Contact: {item.contact}</div> : null}
        {item.plus_ones? <div>Plus ones: {item.plus_ones}</div> : null}
        {item.dietary_restrictions? <div>Dietary Restrictions: {item.dietary_restrictions}</div> : null}
        {item.assigned_dishes? <div>Assigned Dishes: {item.assigned_dishes}</div> : null}
        {item.rsvp_status? <div>RSVP Status: {item.rsvp_status}</div> : null}
         </div>)
    })

    const mappedFoodMenus = dinnerParty.food_menus?.map((item, i) => {
        return (
        <div key={i}>
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    const mappedDrinkMenus = dinnerParty.drink_menus?.map((item, i) => {
        return (
        <div key={i}>
        {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
        {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    const totalGuests = dinnerParty.guests
    const dpDate = dinnerParty.date


    return (
        <div className="view-card">
            <div className="view-card-white">
        <div>id: {id}</div>
        <h4>Main info</h4>
        <div>{dinnerParty.location}</div>
        <div>{moment(dpDate).format("MMMM Do, YYYY")}</div>
        <h4>Vibes</h4>
        <div>{mappedVibes}</div>
        <h4>Guests</h4>
        {totalGuests? <h4>NUMBER</h4> : null}
        <div>{mappedGuests}</div>
        <h4>Food</h4>
        <div>{mappedFoodMenus}</div>
        <h4>Drinks</h4>
        <div>{mappedDrinkMenus}</div>
        </div>
        <button className="edit-dinner-party-button"><Link to={`/dinner-parties/edit/${id}`}>Edit</Link></button>
        </div>
    )
}

export default DinnerPartyView

