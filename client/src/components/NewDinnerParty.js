import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


function NewDinnerParty() {
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [vibes, setVibes] = useState("")
    const [guests, setGuests] = useState("")
    const [foodMenu, setFoodMenu] = useState("")
    const [drinkMenu, setDrinkMenu] = useState("")

    return (
        <div className="new-dinner-party-background">
        <h1>New Dinner Party Template!</h1>
        <form>
            <label>Date: </label>
                <input
                type="datetime"
                name="date"
                placeholder="Select date and time"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <br></br>
            <label>Location: </label>
                <input
                type="text"
                name="location"
                placeholder="Select location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <br></br>
            <label>Vibes: </label>
                <input
                type="text"
                name="vibes"
                placeholder="Define your party vibe"
                value={vibes}
                onChange={(e) => setVibes(e.target.value)}
                />
                <br></br>
            <label>Guests: </label>
                <input
                type="text"
                name="guests"
                placeholder="Who is coming to your party?"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                />
                <br></br>
            <label>Food menu: </label>
                <input
                type="text"
                name="food menu"
                placeholder="What do you plan to cook?"
                value={foodMenu}
                onChange={(e) => setFoodMenu(e.target.value)}
                />
                <br></br>
            <label>Drink menu: </label>
                <input
                type="text"
                name="drink menu"
                placeholder="What do you plan to drink?"
                value={drinkMenu}
                onChange={(e) => setDrinkMenu(e.target.value)}
                />
                <br></br>

        </form>
        </div>

    )
}

export default NewDinnerParty
