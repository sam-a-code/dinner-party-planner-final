import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyMiniCard from "./DinnerPartyMiniCard";

function Profile({ currentUser }) {
    const [dinnerParties, setDinnerParties] = useState(currentUser.dinner_parties)

    const dinnerPartyMiniCard = dinnerParties?.map((dinner_party) => {
        // let dpGuests = dinnerPartyGuests(dinner_party)
        return <DinnerPartyMiniCard
            key={dinner_party.id}
            id={dinner_party.id}
            date={dinner_party.date}
            time={dinner_party.time}
            location={dinner_party.location}
            currentUser={currentUser}
            // dpGuests={dpGuests}
        />
    })

    //dinner party math
    const dinnerPartyCount = dinnerParties.length

    return (
        <>
        <div className="profile-text">
        <h1>Hi, {currentUser.first_name}</h1>
        <h2>You have had {dinnerPartyCount} dinner parties. </h2>
        <h4>View your previous dinner parties. Click to expand and see additional details!</h4>
        <div className="card-parent">{dinnerPartyMiniCard}</div>
        </div>
        <button className="create-dinner-party-button"><Link to={`/create-dinner-party`}>Create a new dinner party</Link></button>
        </>
    )
}

export default Profile

//dinner party math
  // const totalGuestCount = dinnerParties.map((dinner_party) => {
    //     return dinner_party.guests.length
    // })

    // let totalGuestSum = 0

    // totalGuestCount.forEach(value => {
    //     totalGuestSum += value
    // })

    // console.log({totalGuestSum})

    // function dinnerPartyGuests(dinner_party) {

    //     let totalInvited = dinner_party.guests.length
    //     console.log({totalInvited})
    //     let guestSum = totalInvited

    //     const plusOneCount = dinner_party.guests.map((guests) => {
    //         console.log("plus ones", guests.plus_ones)
    //         return guests.plus_ones
    //     })

    //     console.log(plusOneCount)

    //     plusOneCount.forEach(value => guestSum += value)
    //     console.log({guestSum})

    //     return guestSum
    // }


        // const userID = currentUser.id
        // console.log(userID)
