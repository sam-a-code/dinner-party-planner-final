import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

// add conditional rendering - on click show more of each card


function DinnerPartyCard({date, location, vibes, drinks, food, guests}) {
    return (
        <>
        <h4>DATE: {date}</h4>
        <h4>LOCATION: {location}</h4>
        <h4>VIBES: {vibes.map((item,i) => (
            <div key={i}>{item.theme} {item.decor} {item.spotify_playlist} {item.games}</div>
        ))}</h4>
        <h4>DRINKS: {drinks.map((item,i) => (
            <div key={i}>{item.recipe_name} {item.recipe_link} {item.ingredients}</div>
        ))}</h4>
        <h4>FOOD: {food.map((item,i) => (
            <div key={i}>{item.recipe_name} {item.recipe_link} {item.ingredients}</div>
        ))}</h4>
        <h4>GUESTS: {guests.map((item,i) => (
            <div key={i}>{item.name} {item.contact} {item.plus_ones} {item.dietary_restrictions} {item.assigned_dishes} {item.rsvp_status}</div>
        ))}</h4>

        </>
    )
}

export default DinnerPartyCard
