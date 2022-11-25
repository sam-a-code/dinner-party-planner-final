import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import DinnerPartyCard from "./DinnerPartyCard";

function Profile({ currentUser }) {
    console.log(currentUser.dinner_parties)
    const dinnerPartyCard = currentUser.dinner_parties.map((dinner_party) => {
        console.log(dinner_party.vibes)
        return <DinnerPartyCard
            key={dinner_party.id}
            date={dinner_party.date}
            location={dinner_party.location}
            vibes={dinner_party.vibes}
            drinks={dinner_party.drink_menus}
            food={dinner_party.food_menus}
            guests={dinner_party.guests}
        />
    })
    return (
        <>
        <h1>Hi, {currentUser.first_name}</h1>
        {dinnerPartyCard}
        </>
    )
}

export default Profile
