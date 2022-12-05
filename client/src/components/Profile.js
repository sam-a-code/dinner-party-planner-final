import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyMiniCard from "./DinnerPartyMiniCard";

function Profile({ currentUser, dinnerParties, setDinnerParties }) {
    console.log(dinnerParties)

    // Come back and fix: need to transform date string into date format for sorting
    // const sortedDinnerParties = dinnerParties && [...dinnerParties].sort((a, b) => (a.date > b.date))

    // console.log({sortedDinnerParties})

    // set dinner parties
    useEffect(() => {
        fetch(`/dinner_parties`)
          .then((res) => res.json())
          .then((data) => setDinnerParties(data));
      }, []);

    // const dinnerPartiesByDate = dinnerParties.sort((a,b) => (a.date > b.date) ? 1 : -1)
    // console.log(dinnerPartiesByDate)

    const dinnerPartyMiniCard = dinnerParties?.map((dinner_party) => {
        return <DinnerPartyMiniCard
            key={dinner_party.id}
            id={dinner_party.id}
            date={dinner_party.date}
            time={dinner_party.time}
            location={dinner_party.location}
            currentUser={currentUser}
            dinnerParties={dinnerParties}
            setDinnerParties={setDinnerParties}
        />
    })

    //dinner party math
    const dinnerPartyCount = dinnerParties?.length

    return (
        <>
        <div className="profile-text">
            <h1>Hi, {currentUser.first_name}!</h1>
            <h2>You have had {dinnerPartyCount} dinner parties. </h2>
            <h4>View your previous dinner parties. Click to expand and see additional details!</h4>
            <div className="card-parent">{dinnerPartyMiniCard}</div>
            <div className="create-dp-button-parent">
                <button className="create-dinner-party-button button"><Link to={`/create-dinner-party`} style={{ textDecoration: 'none', color: 'black' }}>Create a new dinner party</Link></button>
            </div>
        </div>
        </>
    )
}

export default Profile
