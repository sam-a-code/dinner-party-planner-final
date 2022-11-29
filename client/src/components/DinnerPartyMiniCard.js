import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";

function DinnerPartyMiniCard({id, date, location, currentUser}) {
    return (
        <div className="card">
            <div className="card-white">
            <p>ADD: total guest count</p>
        <h4>DATE: {date}</h4>
        <h4>LOCATION: {location}</h4>
        <button className="view-more-button"><Link to={`/dinner-parties/${id}`}>Click to edit or view more</Link></button>
        </div>
        </div>
    )
}

export default DinnerPartyMiniCard
