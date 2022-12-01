import { useState, useEffect } from "react";

function AddGuestForm({setShowGuestForm}) {
    return (
        <>
            <form>
                <input type="text"
                    placeholder="name"
                    className="edit-dinner-party-form-input"
                    ></input>
                <input type="text"
                    placeholder="contact"
                    className="edit-dinner-party-form-input"
                    ></input>
                <input type="text"
                    placeholder="plus_ones"
                    className="edit-dinner-party-form-input"
                    ></input>
                <input type="text"
                    placeholder="dietary_restrictions"
                    className="edit-dinner-party-form-input"
                    ></input>
                <input type="text"
                    placeholder="assigned_dishes"
                    className="edit-dinner-party-form-input"
                    ></input>
                <select placeholder="rsvp_status"
                    className="edit-dinner-party-form-input">
                    <option value="yes">Yes</option>
                    <option value="yes">No</option>
                    <option value="yes">Maybe</option>
                    <option value="yes" >Maybe that's probably a no</option>
                    </select>
                <input type="submit" className="edit-dinner-party-form-input"></input>
            </form>
            <button className="edit-dinner-party-form-input" onClick={() => setShowGuestForm(false)}>discard</button>
            </>
    )
}

export default AddGuestForm
