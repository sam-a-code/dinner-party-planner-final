import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyCard from "./DinnerPartyCard";
import NewDinnerParty from "./NewDinnerParty";
import DinnerPartyMiniCard from "./DinnerPartyMiniCard";

function Profile({ currentUser }) {
    const [dinnerParties, setDinnerParties] = useState(currentUser.dinner_parties)

    // const dinnerPartyCard = currentUser.dinner_parties.map((dinner_party) => {
    //     return <DinnerPartyCard
    //         key={dinner_party.id}
    //         id={dinner_party.id}
    //         date={dinner_party.date}
    //         location={dinner_party.location}
    //         vibes={dinner_party.vibes}
    //         drinks={dinner_party.drink_menus}
    //         food={dinner_party.food_menus}
    //         guests={dinner_party.guests}
    //         currentUser={currentUser}
    //     />
    // })
    const dinnerPartyMiniCard = dinnerParties?.map((dinner_party) => {
        let dpGuests = dinnerPartyGuests(dinner_party)
        return <DinnerPartyMiniCard
            key={dinner_party.id}
            id={dinner_party.id}
            date={dinner_party.date}
            location={dinner_party.location}
            currentUser={currentUser}
            dpGuests={dpGuests}
        />
    })

    //dinner party math
    const dinnerPartyCount = dinnerParties.length

    // const d2 = dinnerParties.map((dinner_party) => {
    //     return dinner_party.guests.length
    // })

    // let guestSum = 0

    // d2.forEach(value => {
    //     guestSum += value
    // })

    console.log({dinnerParties})

    // const d3 = dinnerParties?.map((dinner_party) => {
    //     console.log("guests", dinner_party.guests)
    //     return dinner_party.guests.map((guests) => {
    //         console.log("plus ones", guests.plus_ones)
    //         return guests.plus_ones
    //     })
    // })

    function dinnerPartyGuests(dinner_party) {

        let totalInvited = dinner_party.guests.length
        console.log({totalInvited})
        let guestSum = totalInvited

        // let d2 = dinner_party
        // const d2 = dinnerParties.map((dinner_party) => {
        //     return dinner_party.guests.length
        // })


        const plusOneCount = dinner_party.guests.map((guests) => {
            console.log("plus ones", guests.plus_ones)
            return guests.plus_ones
        })

        console.log(plusOneCount)

        plusOneCount.forEach(value => guestSum += value)
        console.log({guestSum})

        return guestSum
    }

    // const guestCount = dinnerParties[0].guests.map((guests) => {
    //     console.log("plus ones", guests.plus_ones)
    //     return guests.plus_ones
    // })

    // console.log({guestCount})

    // let plusOneSum = 0
    // d3.forEach(value => {
    //     plusOneSum += parseInt(value)
    // })
    // console.log({plusOneSum})





        const userID = currentUser.id
        console.log(userID)


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
