import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function DinnerPartyMiniCard({id, date, location, time, currentUser, dpGuests}) {
    return (
        <div className="card">
            <div className="card-white">
            {/* <p>Total guests: {dpGuests}</p> */}
        <h4>DATE: {moment(date).format("MMMM Do, YYYY")}</h4>
        <h4>TIME: {time}</h4>
        <h4>LOCATION: {location}</h4>
        <button className="view-more-button"><Link to={`/dinner-parties/${id}`}>Click to view more</Link></button>
        <button className="view-more-button"><Link to={`/dinner-parties/edit/${id}`}>Click to edit</Link></button>
        </div>
        </div>
    )
}

export default DinnerPartyMiniCard
