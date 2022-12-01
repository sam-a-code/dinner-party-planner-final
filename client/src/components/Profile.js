import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyCard from "./DinnerPartyCard";
import NewDinnerParty from "./NewDinnerParty";
import DinnerPartyMiniCard from "./DinnerPartyMiniCard";

function Profile({ currentUser }) {
    const [dinnerParties, setDinnerParties] = useState(currentUser.dinner_parties)
    console.log(dinnerParties)

    // function addDinnerParty(){
    //     setDinnerParties((dinnerParties) => [...dinnerParties, newDinnerParty])
    // }

    const dinnerPartyCard = currentUser.dinner_parties.map((dinner_party) => {
        return <DinnerPartyCard
            key={dinner_party.id}
            id={dinner_party.id}
            date={dinner_party.date}
            location={dinner_party.location}
            vibes={dinner_party.vibes}
            drinks={dinner_party.drink_menus}
            food={dinner_party.food_menus}
            guests={dinner_party.guests}
            currentUser={currentUser}
        />
    })
    const dinnerPartyMiniCard = dinnerParties.map((dinner_party) => {
        return <DinnerPartyMiniCard
            key={dinner_party.id}
            id={dinner_party.id}
            date={dinner_party.date}
            location={dinner_party.location}
            currentUser={currentUser}
        />
    })


    const dinnerPartyCount = currentUser.dinner_parties.length

    // const d2 = currentUser.dinner_parties.map((dinner_party) => {
    //     return dinner_party.guests.length
    // })

    // const d3 = currentUser.dinner_parties.map((dinner_party) => {
    //     return dinner_party.guests
    // })

    // const d4 = d3.map((guests) => {
    //     return guests.plus_ones
    // })

        const userID = currentUser.id
        console.log(userID)


// REVISIT: trying to map through dinner parties. are they showing all DPs or just the ones for current user?
        // const totalGuests = dinnerParties.map((party) => {
        //     console.log(party.guests.plus_ones)

        //     return (
        //         party.guests.plus_ones
        //         // party.length
        //         // parseInt(party.plus_ones)
        //         )
        // })
        // console.log(totalGuests)


    return (
        <>
        <div className="profile-text">
        <h1>Hi, {currentUser.first_name}</h1>
        <h2>You have had {dinnerPartyCount} dinner parties. </h2>
        <h4>View your previous dinner parties. Click to expand and see additional details!</h4>
        <div className="card-parent">{dinnerPartyMiniCard}</div>
        {/* <div className="card-parent">{dinnerPartyCard}</div> */}
        </div>
        <button className="create-dinner-party-button"><Link to={`/create-dinner-party`}>Create a new dinner party</Link></button>
        </>
    )
}

export default Profile
