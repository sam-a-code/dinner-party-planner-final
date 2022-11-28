import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

// am i doing a fetch or a useparams?
function DinnerPartyView({date, location, vibes, drinks, food, guests, currentUser}) {
    const {id} = useParams();
    const [dinnerParty, setDinnerParty] = useState([])
    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParty) => setDinnerParty(dinnerParty));
      }, []);

          console.log(dinnerParty.vibes)


    // const vibes = dinnerParty.vibes

    // console.log(dinnerParty.guests)

    // const mappedVibes = vibes.map((key, item) => {
    //     <div key={key}>{item.theme}, {item.decor}, {item.spotify_playlist}, {item.games}</div>
    // })

    // console.log(dinnerParty.vibes)

    // const vibeObj = dinnerParty.vibes
    // console.log(vibeObj)

    // for (const [key, value] of Object.entries(vibeObj)){
    //     console.log(`${key} ${value}`)
    // }


    return (
        <>
        <div>{id}</div>
        <div>{dinnerParty.location}</div>
        <div>{dinnerParty.date}</div>
        </>
    )
}

export default DinnerPartyView

