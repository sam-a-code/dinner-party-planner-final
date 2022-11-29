import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";

function DinnerPartyCard({id, date, location, vibes, drinks, food, guests, currentUser}) {
    return (
        <div className="card">
            <div className="card-white">
            <p>ADD: total guest count</p>
        <h4>DATE: {date}</h4>
        <h4>LOCATION: {location}</h4>
        {/* <h4>GUEST TOTAL: </h4> */}
        <h4>GUESTS: {guests.map((item,i) => (
            <div key={i}>
                Name: {item.name}
                <br></br>
                {/* Contact info: {item.contact}
                <br></br> */}
                Plus ones: {item.plus_ones}
                <br></br>
                {/* Dietary restrictions: {item.dietary_restrictions}
                <br></br>
                Assigned dishes: {item.assigned_dishes}
                <br></br> */}
                RSVP Status: {item.rsvp_status}</div>
        ))}</h4>
        <h4>VIBES: {vibes.map((item,i) => (
            <div key={i}>
                Theme: {item.theme}
                <br></br>
                {/* Decor: {item.decor}
                <br></br> */}
                <a href={item.spotify_playlist}>Spotify Playlist</a>
                {/* <br></br>
                Games:{item.games} */}
            </div>
        ))}</h4>
        <h4>DRINKS: {drinks.map((item,i) => (
            <div key={i}>
                <a href={item.recipe_link}>{item.recipe_name}</a>
                {/* <br></br>
                Ingredients: {item.ingredients}
                <br></br> */}

            </div>
        ))}</h4>
        <h4>FOOD: {food.map((item,i) => (
            <div key={i}>
                <a href={item.recipe_link}>{item.recipe_name}</a>
                {/* <br></br>
                Ingredients: {item.ingredients} */}
            </div>
        ))}</h4>
        <button className="view-more-button"><Link to={`/dinner-parties/${id}`}>Click to edit or view more</Link></button>
        </div>
        </div>
    )
}

export default DinnerPartyCard
