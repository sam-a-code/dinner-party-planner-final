import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function FoodInspoCard({name, link, image, ingredients, exploreDPs}) {
    const [showDPDrowndown, setShowDPDropdown] = useState(true)
    const [addFoodInspoDP, setAddFoodInspoDP] = useState("")
    const navigate = useNavigate()


    function toggleDPDropdown() {
        setShowDPDropdown(!showDPDrowndown)
    }

    function addFoodInspo(e) {
        console.log(addFoodInspoDP)
        e.preventDefault();
        toggleDPDropdown(!toggleDPDropdown)
        // navigate(`/dinner-parties/${addFoodInspoDP}`)
        const addFoodInspo = {
            recipe_name: name,
            recipe_link: link,
            ingredients: ingredients,
            dinner_party_id: addFoodInspoDP
        }
        fetch(`/food_menus`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addFoodInspo),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }


    return (
        <div className="inspo-card">
            <div className="inspo-image">
                <img src={image} style={{maxWidth: '250px', borderRadius: '2px'}}></img>
            </div>
            <a className="hover-underline" style={{  color: 'black'}} target="_blank" href={link}>{name}</a>
            {/* <p>{ingredients}</p> */}
            <br></br>
            {showDPDrowndown ?
                <div>
                    <button className="button inspo-button" onClick={toggleDPDropdown}>add this dish to one of your dinner parties!</button>
                </div>:
                <div>
                    <form>
                    <select className="edit-dinner-party-form-input" onChange={(e) => setAddFoodInspoDP(e.target.value)}>
                        <option>Select a dinner party</option>
                        {exploreDPs.map((DP) => {
                            return (
                                <option key={DP.id} value={DP.id}>{moment(DP.date).format("MMMM Do, YYYY")} at {DP.time}
                                </option>
                            )})}
                    </select>
                    <br></br>
                    <button className="button inspo-button" type='submit' onClick={addFoodInspo}>add to your party</button>
                    </form>
                    <button className="button inspo-button" onClick={toggleDPDropdown}>close add</button>
                </div>}
        </div>
    )
}

export default FoodInspoCard


// on click have dinner party dropdown show up
// pick dinner party from dropdown
// click to submit to dinner party
// post will be sent to dinner parties.child
