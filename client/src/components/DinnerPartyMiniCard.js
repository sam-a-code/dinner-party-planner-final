import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment';

function DinnerPartyMiniCard({id, date, location, time, currentUser, dpGuests}) {

    let newDatePretty = moment().format()
    const isUpcoming = date > newDatePretty

    return (
        <div className="mini-card">
            <div className="card-white">
                {isUpcoming ? <h4>**UPCOMING**</h4> : null}
                <h4>DATE: {moment(date).format("MMMM Do, YYYY")}</h4>
                <h4>TIME: {time}</h4>
                <h4>LOCATION: {location}</h4>
                </div>
                <button className="view-more-button button"><Link to={`/dinner-parties/${id}`} style={{ textDecoration: 'none', color: 'black'}}>Click to view more</Link></button>
                <button className="view-more-button button"><Link to={`/dinner-parties/edit/${id}`} style={{ textDecoration: 'none', color: 'black' }}>Click to edit</Link></button>
        </div>
    )
}

export default DinnerPartyMiniCard
