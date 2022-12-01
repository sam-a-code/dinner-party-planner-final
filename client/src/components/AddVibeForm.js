import { useState, useEffect } from "react";

function AddVibeForm({setShowVibeForm, handleAddVibe, id, dinnerParty, setDinnerParty, renderNewVibes}) {

    const [addTheme, setAddTheme] = useState("")
    const [addDecor, setAddDecor] = useState("")
    const [addSpotifyPlaylist, setAddSpotifyPlaylist] = useState("")
    const [addGames, setAddGames] = useState("")

    console.log(id)

    function handleAddVibe(e) {
        e.preventDefault();
        const addVibe = {
        theme: addTheme,
        decor: addDecor,
        spotify_playlist: addSpotifyPlaylist,
        games: addGames,
        dinner_party_id: id
        }
        fetch(`/vibes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addVibe),
        })
        .then(res => res.json())
        .then(addVibe => renderNewVibes(addVibe))


        // const updatedVibes = dinnerParty.vibes
        // setDinnerParty({...dinnerParty, vibes: updatedVibes})
        // console.log(updatedVibes)
    }

    return (
        <>
                <form onSubmit={handleAddVibe}>
                    <input type="text"
                    value={addTheme}
                    placeholder="theme"
                    className="edit-dinner-party-form-input"
                    onChange={(e) => setAddTheme(e.target.value)}
                    ></input>
                    <input type="text"
                    value={addDecor}
                    placeholder="decor"
                    className="edit-dinner-party-form-input"
                    onChange={(e) => setAddDecor(e.target.value)}
                    ></input>
                    <input type="text"
                    value={addSpotifyPlaylist}
                    placeholder="spotify_playlist"
                    className="edit-dinner-party-form-input"
                    onChange={(e) => setAddSpotifyPlaylist(e.target.value)}
                    ></input>
                    <input type="text"
                    value={addGames}
                    placeholder="games"
                    className="edit-dinner-party-form-input"
                    onChange={(e) => setAddGames(e.target.value)}
                    ></input>
                    <input type="submit" className="edit-dinner-party-form-input"></input>
                </form>
                <button className="edit-dinner-party-form-input" onClick={() => setShowVibeForm(false)}>discard</button>
                </>
    )
}

export default AddVibeForm
