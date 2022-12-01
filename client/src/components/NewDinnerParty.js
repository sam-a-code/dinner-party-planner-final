import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm, FormProvider, useFormContext } from "react-hook-form"


function NewDinnerParty({userID, currentUser}) {
    const { register, handleSubmit } = useForm()
    const methods = useForm()
    const [errors, setErrors] = useState([])
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [dinnerParty, setDinnerParty] = useState({})
    const [id, setID] = useState(userID)
    const navigate = useNavigate()

    function handleNewDPSubmit(e) {
        e.preventDefault();
        const newDP = {
            date: date,
            location: location,
            user_id: id,
        }
        fetch(`/dinner_parties`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDP),
        })
        .then(res => res.json())
        .then(newDP => setDinnerParty(newDP))
        navigate(`/profile`)
        console.log(newDP)
      }


    return (
        <div className="new-dinner-party-background">
        <h1>enter a date and location to create a new dinner party</h1>
        <div >
            <form className="new-dinner-party-form" onSubmit={handleNewDPSubmit}>
                <input
                placeholder="Location"
                className="new-dinner-party-form-input"
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <br></br>
                <input placeholder="Date" className="new-dinner-party-form-input"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <br></br>
                <input type="submit" value="create dinner party" className="form-submit-button"
                />
            </form>
        </div>
        {/* <div>
            <div>Guest cards</div>
                <button>Add guest</button>
                <br></br>
            <div>Vibe cards</div>
                <button>Add vibes</button>
                <br></br>
            <div>Food cards</div>
                <button>Add food</button>
                <br></br>
            <div>Drink cards</div>
                <button>Add drinks</button>
                <br></br>
        </div> */}
        </div>
    )




}

export default NewDinnerParty

  {/* original form below */}
        {/* <form>
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
        </form> */}
