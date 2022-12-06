import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function VibeInspoCard({theme, decor, image, spotify_playlist, games, exploreDPs, vibeInspos}) {
    const [showDPDrowndown, setShowDPDropdown] = useState(true)
    const [addVibeInspoDP, setAddVibeInspoDP] = useState("")
    const navigate = useNavigate()

    console.log(theme)

    function toggleDPDropdown() {
        setShowDPDropdown(!showDPDrowndown)
    }

    function addVibeInspo(e) {
        console.log(addVibeInspoDP)
        e.preventDefault();
        toggleDPDropdown(!toggleDPDropdown)
        // navigate(`/dinner-parties/${addDrinkInspoDP}`)
        const addVibeInspo = {
            theme: theme,
            decor: decor,
            spotify_playlist: spotify_playlist,
            games: games,
            dinner_party_id: addVibeInspoDP
        }
        fetch(`/vibes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addVibeInspo),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }


    return (
        <div className="inspo-card">
            <div className="inspo-image">
                <img src={image} style={{maxWidth: '250px', borderRadius: '2px' }}></img>
            </div>
            {theme ? <p>theme: {theme}</p> : null }
            {decor ? <p>decor: {decor}</p> : null }
            {games? <p>games: {games}</p> : null}
            {spotify_playlist ? <a className="hover-underline" style={{  color: 'black'}} target="_blank" href={spotify_playlist}>spotify playlist</a> : null }
            {showDPDrowndown ?
                <div>
                    <button className="button inspo-button" onClick={toggleDPDropdown}>add these vibes to one of your dinner parties!</button>
                </div>:
                <div>
                    <form>
                    <select className="edit-dinner-party-form-input" onChange={(e) => setAddVibeInspoDP(e.target.value)}>
                        <option>Select a dinner party</option>
                        {exploreDPs.map((DP) => {
                            return (
                                <option key={DP.id} value={DP.id}>{moment(DP.date).format("MMMM Do, YYYY")} at {DP.time}
                                </option>
                            )})}
                    </select>
                    <br></br>
                    <button className="button inspo-button" type='submit' onClick={addVibeInspo}>add to your party</button>
                    </form>
                    <button className="button inspo-button" onClick={toggleDPDropdown}>close add</button>
                </div>}
        </div>
    )
}

export default VibeInspoCard
