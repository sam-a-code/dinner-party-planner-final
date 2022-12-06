import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom"
import DinnerPartyView from "./DinnerPartyView";
import moment from 'moment'

function DinnerPartyEdit({}) {
    const {id} = useParams();

    //state for viewing forms, setting dinnerParty, and error messages
    const [dinnerParty, setDinnerParty] = useState([])
    const [showVibeForm, setShowVibeForm] = useState(false)
    const [showGuestForm, setShowGuestForm] = useState(false)
    const [showFoodForm, setShowFoodForm] = useState(false)
    const [showDrinkForm, setShowDrinkForm] = useState(false)
    const [guestErrors, setGuestErrors] = useState([])
    const [foodErrors, setFoodErrors] = useState([])
    const [drinkErrors, setDrinkErrors] = useState([])

    //add vibes state
    const [addTheme, setAddTheme] = useState("")
    const [addDecor, setAddDecor] = useState("")
    const [addSpotifyPlaylist, setAddSpotifyPlaylist] = useState("")
    const [addGames, setAddGames] = useState("")

    //add guest state
    const [addName, setAddName] = useState("")
    const [addContact, setAddContact] = useState("")
    const [addPlusOnes, setAddPlusOnes] = useState("")
    const [addDietaryRestrictions, setAddDietaryRestrictions] = useState("")
    const [addAssignedDishes, setAddAssignedDishes] = useState("")
    const [addRSVPStatus, setAddRSVPStatus] = useState("")

    //add food state
    const [addFoodRecipeName, setAddFoodRecipeName] = useState("")
    const [addFoodRecipeLink, setAddFoodRecipeLink] = useState("")
    const [addFoodRecipeIngredients, setAddFoodRecipeIngredients] = useState("")

    //add drink state
    const [addDrinkRecipeName, setAddDrinkRecipeName] = useState("")
    const [addDrinkRecipeLink, setAddDrinkRecipeLink] = useState("")
    const [addDrinkRecipeIngredients, setAddDrinkRecipeIngredients] = useState("")

    //set dinnerParty
    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParty) => setDinnerParty(dinnerParty));
      }, []);

    //delete functions
    function handleVibesDelete(vibeID) {
        fetch(`/vibes/${vibeID}`, {
            method: "DELETE",
        })
        const updatedVibes = dinnerParty.vibes.filter(vibe => vibe.id !== vibeID)
        setDinnerParty({...dinnerParty, vibes: updatedVibes})
    }

    function handleGuestDelete(guestID) {
        fetch(`/guests/${guestID}`, {
            method: "DELETE",
        })
        const updatedGuests = dinnerParty.guests.filter(guest => guest.id !== guestID)
        setDinnerParty({...dinnerParty, guests: updatedGuests})
    }

    function handleFoodDelete(foodID) {
        fetch(`/food_menus/${foodID}`, {
            method: "DELETE",
        })
        const updatedFoods = dinnerParty.food_menus.filter(foodMenu => foodMenu.id !== foodID)
        setDinnerParty({...dinnerParty, food_menus: updatedFoods})
    }

    function handleDrinkDelete(drinkID) {
        fetch(`/drink_menus/${drinkID}`, {
            method: "DELETE",
        })
        const updatedDrinks = dinnerParty.drink_menus.filter(drinkMenu => drinkMenu.id !== drinkID)
        setDinnerParty({...dinnerParty, drink_menus: updatedDrinks})
    }

    //add functions
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
        .then((vibe) => {
            const updatedVibes = [...dinnerParty.vibes, vibe]
            setDinnerParty({...dinnerParty, vibes: updatedVibes})
            console.log(updatedVibes)
        }
    )}

    function handleAddGuest(e) {
        e.preventDefault();
        const addGuest = {
        name: addName,
        contact: addContact,
        plus_ones: addPlusOnes,
        dietary_restrictions: addDietaryRestrictions,
        assigned_dishes: addAssignedDishes,
        rsvp_status: addRSVPStatus,
        dinner_party_id: id
        }
        fetch(`/guests`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addGuest),
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => {
                const updatedGuests = [...dinnerParty.guests, data]
                setDinnerParty({...dinnerParty, guests: updatedGuests})
                console.log(updatedGuests)})
            }else {
                res.json().then(data => setGuestErrors(Object.entries(data.errors)))
                console.log(guestErrors)
            }
        })
    }

    function handleAddFood(e) {
        e.preventDefault();
        const addFood = {
        recipe_name: addFoodRecipeName,
        recipe_link: addFoodRecipeLink,
        ingredients: addFoodRecipeIngredients,
        dinner_party_id: id
        }
        fetch(`/food_menus`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addFood),
        })
        .then(res => {
            if (res.ok){
                res.json().then((data) => {
                const updatedFoods = [...dinnerParty.food_menus, data]
                setDinnerParty({...dinnerParty, food_menus: updatedFoods})
                console.log(updatedFoods)})
            }else {
                res.json().then(data => setFoodErrors(Object.entries(data.errors)))
                console.log(foodErrors)
            }
        })
    }


    function handleAddDrink(e) {
        e.preventDefault();
        const addDrink = {
        recipe_name: addDrinkRecipeName,
        recipe_link: addDrinkRecipeLink,
        ingredients: addDrinkRecipeIngredients,
        dinner_party_id: id
        }
        fetch(`/drink_menus`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addDrink),
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => {
                const updatedDrinks = [...dinnerParty.drink_menus, data]
                setDinnerParty({...dinnerParty, drink_menus: updatedDrinks})
                console.log(updatedDrinks)})
            }else {
                res.json().then(data => setDrinkErrors(Object.entries(data.errors)))
                console.log(drinkErrors)
            }
        })
    }

    //mapping each child (vibes, guests, food, drinks)
    const mappedVibes = dinnerParty.vibes?.map((item, i) => {
        const vibeID = item.id
        return (
        <div key={i} className="edit-vibe-card">
            <div className="edit-vibe-card-text">
                {item.theme? <div >Theme: {item.theme}</div> : null }
                {item.decor? <div >Decor: {item.decor}</div> : null}
                {item.spotify_playlist? <a className="hover-underline" style= {{color: 'black'}} href={item.spotify_playlist}>Spotify playlist</a> : null}
                {item.games? <div>Games: {item.games}</div> : null}
                <br></br>
            </div>
        <button onClick={() => handleVibesDelete(vibeID)} className="x-button">x</button>
         </div>)
    })

    const mappedGuests = dinnerParty.guests?.map((item, i) => {
        const guestID = item.id
        return (
        <div key={i} className="edit-guest-card">
            <div className="edit-guest-card-text">
                {item.name? <div >Name: {item.name}</div> : null }
                {item.contact? <div >Contact: {item.contact}</div> : null}
                {item.plus_ones? <div >Plus ones: {item.plus_ones}</div> : null}
                {item.dietary_restrictions? <div >Dietary Restrictions: {item.dietary_restrictions}</div> : null}
                {item.assigned_dishes? <div >Assigned Dishes: {item.assigned_dishes}</div> : null}
                {item.rsvp_status? <div >RSVP Status: {item.rsvp_status}</div> : null}
            </div>
        <button onClick={() => handleGuestDelete(guestID)} className="x-button">x</button>
         </div>)
    })

    const mappedFoodMenus = dinnerParty.food_menus?.map((item, i) => {
        const foodID = item.id
        return (
        <div key={i} className="edit-food-card">
            <div className="edit-food-card-text">
                {item.recipe_name? <a style={{ color: 'black' }} href={item.recipe_link}>{item.recipe_name}</a> : null }
                {item.ingredients? <div >Ingredients: {item.ingredients}</div> : null}
            </div>
        <button onClick={() => handleFoodDelete(foodID)} className="x-button">x</button>
         </div>)
    })

    const mappedDrinkMenus = dinnerParty.drink_menus?.map((item, i) => {
        const drinkID = item.id
        return (
        <div key={i} className="edit-drink-card">
            <div className="edit-drink-card-text">
                {item.recipe_name? <a style={{ color: 'black' }}href={item.recipe_link}>{item.recipe_name}</a> : null }
                {item.ingredients? <div >Ingredients: {item.ingredients}</div> : null}
            </div>
        <button onClick={() => handleDrinkDelete(drinkID)} className="x-button">x</button>
         </div>)
    })

    // rendering components
    const dpDate = dinnerParty.date
    return (
        <div>
            <div className="edit-parent-div">
            <h3 className="edit-page-text">
                {dinnerParty.location}<br></br>
                {moment(dpDate).format("MMMM Do, YYYY")} at {dinnerParty.time}</h3>
            <h3 className="edit-page-text">Vibes</h3>
                <h3 className="edit-card-parent">{mappedVibes}</h3>
                {showVibeForm ?(<>
                    <form onSubmit={handleAddVibe}>
                        <input type="text"
                        value={addTheme}
                        placeholder="theme"
                        className="edit-dinner-party-form-input"
                        onChange={(e) => setAddTheme(e.target.value)}
                        ></input><br></br>
                        <input type="text"
                        value={addDecor}
                        placeholder="decor"
                        className="edit-dinner-party-form-input"
                        onChange={(e) => setAddDecor(e.target.value)}
                        ></input><br></br>
                        <input type="text"
                        value={addSpotifyPlaylist}
                        placeholder="spotify playlist link"
                        className="edit-dinner-party-form-input"
                        onChange={(e) => setAddSpotifyPlaylist(e.target.value)}
                        ></input><br></br>
                        <input type="text"
                        value={addGames}
                        placeholder="games"
                        className="edit-dinner-party-form-input"
                        onChange={(e) => setAddGames(e.target.value)}
                        ></input><br></br>
                        <input type="submit" value="submit" className="edit-dinner-party-form-input button"></input>
                    </form>
                <button className="edit-dinner-party-form-input button" onClick={() => setShowVibeForm(false)}>close</button> </>) :
                <button className="add-to-dinner-party-button button" onClick={() => setShowVibeForm(true)}>add some vibes to your party</button>}
            <h3 className="edit-page-text">Guests</h3>
                <h3 className="edit-card-parent">{mappedGuests}</h3>
                {showGuestForm ? (<>
                    <form onSubmit={handleAddGuest}>
                        <input type="text"
                            value={addName}
                            placeholder="name"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddName(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addContact}
                            placeholder="contact info"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddContact(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addPlusOnes}
                            placeholder="number of plus ones"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddPlusOnes(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addDietaryRestrictions}
                            placeholder="dietary restrictions"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddDietaryRestrictions(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addAssignedDishes}
                            placeholder="assigned dishes"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddAssignedDishes(e.target.value)}
                            ></input><br></br>
                        <select placeholder="rsvp_status"
                            onChange={(e) => setAddRSVPStatus(e.target.value)}
                            className="edit-dinner-party-form-input">
                            <option value="">RSVP status</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="maybe">Maybe</option>
                            <option value="maybe that's probably a no" >Maybe that's probably a no</option>
                            </select><br></br>
                        <input type="submit" value="submit" className="edit-dinner-party-form-input button"></input>
                    </form>
                <button className="edit-dinner-party-form-input button" onClick={() => setShowGuestForm(false)}>close</button>
                {guestErrors?guestErrors.map(e => <div>{e}</div>):null} </>) :
                <button className="add-to-dinner-party-button button" onClick={() => setShowGuestForm(true)}>add to your guest list</button>}
            <h3 className="edit-page-text">Food Menus</h3>
                <h3 className="edit-card-parent">{mappedFoodMenus}</h3>
                {showFoodForm ? (<>
                    <form onSubmit={handleAddFood}>
                        <input type="text"
                            value={addFoodRecipeName}
                            placeholder="recipe name"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddFoodRecipeName(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addFoodRecipeLink}
                            placeholder="recipe link"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddFoodRecipeLink(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addFoodRecipeIngredients}
                            placeholder="ingredients"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddFoodRecipeIngredients(e.target.value)}
                            ></input><br></br>
                        <input type="submit" value="submit" className="edit-dinner-party-form-input button"></input>
                    </form>
                <button className="edit-dinner-party-form-input button" onClick={() => setShowFoodForm(false)}>close</button>
                {foodErrors?foodErrors.map(e => <div>{e}</div>):null} </>) :
                <button className="add-to-dinner-party-button button" onClick={() => setShowFoodForm(true)}>add an item to your food menu</button>}
            <h3 className="edit-page-text">Drink Menus</h3>
                <h3 className="edit-card-parent">{mappedDrinkMenus}</h3>
                {showDrinkForm ? (<>
                    <form onSubmit={handleAddDrink}>
                        <input type="text"
                            value={addDrinkRecipeName}
                            placeholder="recipe name"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddDrinkRecipeName(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addDrinkRecipeLink}
                            placeholder="recipe link"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddDrinkRecipeLink(e.target.value)}
                            ></input><br></br>
                        <input type="text"
                            value={addDrinkRecipeIngredients}
                            placeholder="ingredients"
                            className="edit-dinner-party-form-input"
                            onChange={(e) => setAddDrinkRecipeIngredients(e.target.value)}
                            ></input><br></br>
                        <input type="submit" value="submit" className="edit-dinner-party-form-input button"></input>
                    </form>
                <button className="edit-dinner-party-form-input button" onClick={() => setShowDrinkForm(false)}>close</button>
                {drinkErrors?drinkErrors.map(e => <div>{e}</div>):null} </>) :
                <button className="add-to-dinner-party-button button" onClick={() => setShowDrinkForm(true)}>add an item to your drink menu</button>}
            <br></br>
                <button className="return-to-view-dinner-party-button button"><Link to={`/dinner-parties/${id}`} style={{ textDecoration: 'none', color: 'black'}}>Return to view</Link></button>
            </div>
        </div>
    )
}

export default DinnerPartyEdit
