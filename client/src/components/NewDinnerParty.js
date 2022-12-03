import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


function NewDinnerParty({userID, currentUser}) {
    const [errors, setErrors] = useState([])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [dinnerParty, setDinnerParty] = useState({})
    const [id, setID] = useState(userID)
    const navigate = useNavigate()

    function handleNewDPSubmit(e) {
        e.preventDefault();
        const newDP = {
            date: date,
            time: time,
            location: location,
            user_id: id,
        }
        fetch(`/dinner_parties`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDP),
        })
        .then(res => {
            if (res.ok){
                res.json()
                .then(newDP => setDinnerParty(newDP))
                navigate('/profile')
                console.log(newDP)
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors)))
                console.log(errors)
            }
        })
        // .then(res => res.json())
        // .then(newDP => setDinnerParty(newDP))
        // navigate(`/profile`)
        // console.log(newDP)
      }

    return (
        <div className="new-dinner-party-background">
        <h1>enter a date and location to create a new dinner party</h1>
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
                <input
                placeholder="Time"
                className="new-dinner-party-form-input"
                type="text"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                />
                <br></br>
                <input type="submit" value="create dinner party" className="new-dinner-party-submit-button"
                />
            </form>
            {errors?errors.map(e => <div>{e}</div>):null}
        </div>
    )
}

export default NewDinnerParty
