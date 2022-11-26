import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

// add conditional rendering - on click show more of each card


function DinnerPartyCard({date, location, vibes, drinks, food, guests}) {
    return (
        <div className="card">
        <h4>DATE: {date}</h4>
        <h4>LOCATION: {location}</h4>
        <h4>VIBES: {vibes.map((item,i) => (
            <div key={i}>
                Theme: {item.theme}
                <br></br>
                Decor: {item.decor}
                <br></br>
                <a href={item.spotify_playlist}>Spotify Playlist</a>
                <br></br>
                Games:{item.games}
            </div>
        ))}</h4>
        <h4>DRINKS: {drinks.map((item,i) => (
            <div key={i}>
                Recipe name: {item.recipe_name}
                <br></br>
                <a href={item.recipe_link}>Recipe link</a>
                <br></br>
                Ingredients: {item.ingredients}
            </div>
        ))}</h4>
        <h4>FOOD: {food.map((item,i) => (
            <div key={i}>
                Recipe name: {item.recipe_name}
                <br></br>
                <a href={item.recipe_link}>Recipe link</a>
                <br></br>
                Ingredients: {item.ingredients}
            </div>
        ))}</h4>
        <h4>GUESTS: {guests.map((item,i) => (
            <div key={i}>
                Name: {item.name}
                <br></br>
                Contact info: {item.contact}
                <br></br>
                Plus ones: {item.plus_ones}
                <br></br>
                Dietary restrictions: {item.dietary_restrictions}
                <br></br>
                Assigned dishes: {item.assigned_dishes}
                <br></br>
                RSVP Status: {item.rsvp_status}</div>
        ))}</h4>
        </div>
    )
}

export default DinnerPartyCard
