import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function DrinkInspoCard({name, link, image, ingredients, exploreDPs}) {
    const [showDPDrowndown, setShowDPDropdown] = useState(true)
    const [addDrinkInspoDP, setAddDrinkInspoDP] = useState("")
    const navigate = useNavigate()


    function toggleDPDropdown() {
        setShowDPDropdown(!showDPDrowndown)
    }

    function addDrinkInspo(e) {
        console.log(addDrinkInspoDP)
        e.preventDefault();
        toggleDPDropdown(!toggleDPDropdown)
        // navigate(`/dinner-parties/${addDrinkInspoDP}`)
        const addDrinkInspo = {
            recipe_name: name,
            recipe_link: link,
            ingredients: ingredients,
            dinner_party_id: addDrinkInspoDP
        }
        fetch(`/drink_menus`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addDrinkInspo),
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
            <a className="hover-underline" style={{  color: 'black'}} target="_blank" href={link}>{name}</a>
            {/* <p>{ingredients}</p> */}
            <br></br>
            {showDPDrowndown ?
                <div>
                    <button className="inspo-button" onClick={toggleDPDropdown}>add this drink to one of your dinner parties!</button>
                </div>:
                <div>
                    <form>
                    <select className="edit-dinner-party-form-input" onChange={(e) => setAddDrinkInspoDP(e.target.value)}>
                        <option>Select a dinner party</option>
                        {exploreDPs.map((DP) => {
                            return (
                                <option key={DP.id} value={DP.id}>{moment(DP.date).format("MMMM Do, YYYY")} at {DP.time}
                                </option>
                            )})}
                    </select>
                    <br></br>
                    <button className="inspo-button" type='submit' onClick={addDrinkInspo}>add to your party</button>
                    </form>
                    <button className="inspo-button" onClick={toggleDPDropdown}>close add</button>
                </div>}
        </div>
    )
}

export default DrinkInspoCard
