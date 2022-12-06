import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function DinnerPartyMiniCard({id, date, location, time, currentUser, dpGuests, setDinnerParties, dinnerParties}) {
    const [showDPEditForm, setShowDPEditForm] = useState(false)
    const [showDPCancel, setShowDPCancel] = useState(false)
    const [dpDate, setDpDate] = useState(date)
    const [dpTime, setDpTime] = useState(time)
    const [dpLocation, setDpLocation] = useState(location)
    const [dpErrors, setDpErrors] = useState([])

    const navigate = useNavigate()


    let newDatePretty = moment().format()
    const isUpcoming = date > newDatePretty

    function handleChangeDP(e) {
        e.preventDefault();
        const updatedDP = {
        date: dpDate,
        time: dpTime,
        location: dpLocation,
        dinner_party_id: id
        }
        fetch(`/dinner_parties/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedDP),
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then((data) => console.log(data))
                navigate(`/dinner-parties/${id}`)
            }else {
                res.json().then(data => setDpErrors(Object.entries(data.errors)))
                console.log(dpErrors)
            }
        })
    }

    function handleDeleteDP() {
        fetch(`/dinner_parties/${id}`, {
            method: "DELETE",
        })
        window.location.reload(true)
    }

    return (
        <div className="mini-card">
            <div className="card-white">
                {isUpcoming ? <h4>**UPCOMING**</h4> : null}
                <h4>DATE: {moment(date).format("MMMM Do, YYYY")}</h4>
                <h4>TIME: {time}</h4>
                <h4>LOCATION: {location}</h4>
                </div>
                <button className="mini-card-button button"><Link to={`/dinner-parties/${id}`} style={{ textDecoration: 'none', color: 'black'}}>view</Link></button>
                <br></br>
                <button className="mini-card-button button"><Link to={`/dinner-parties/edit/${id}`} style={{ textDecoration: 'none', color: 'black' }}>add details</Link></button>
                <br></br>
                {showDPEditForm ?
                (<>
                    <form onSubmit={handleChangeDP}>
                        <input type="date"
                            value={dpDate}
                            placeholder="date"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setDpDate(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={dpTime}
                            placeholder="time"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setDpTime(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={dpLocation}
                            placeholder="location"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setDpLocation(e.target.value)}
                            ></input><br></br>
                        <input type="submit" value="submit" className="mini-card-button button"></input>
                    </form>
                    <button className="mini-card-button button" onClick={() => setShowDPEditForm(!showDPEditForm)}>close</button>
                    {dpErrors?dpErrors.map(e => <div>{e}</div>):null} </>)
                : <button className="mini-card-button button" onClick={() => setShowDPEditForm(!showDPEditForm)}>change date/time/location</button>}
                <br></br>
                {showDPCancel ?
                <>
                <h3 className="confirm-cancel">Are you sure?</h3>
                <button onClick={handleDeleteDP} className="mini-card-button button">Yes, cancel!</button>
                <button onClick={() => setShowDPCancel(!showDPCancel)} className="mini-card-button button">No, keep this party!</button>
                </>
                : <button onClick={() => setShowDPCancel(!showDPCancel)} className="mini-card-button button">cancel dinner party</button>}
        </div>
    )
}

export default DinnerPartyMiniCard
