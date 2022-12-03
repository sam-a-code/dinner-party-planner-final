import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import moment from 'moment'
import emailjs from '@emailjs/browser'

function DinnerPartyView({currentUser}) {

    //setting dinnerParty and useParams of id
    const {id} = useParams();
    const [dinnerParty, setDinnerParty] = useState([])
    useEffect(() => {
        fetch(`/dinner_parties/${id}`)
          .then((res) => res.json())
          .then((dinnerParty) => setDinnerParty(dinnerParty));
      }, []);

    // mapping children elements (vibes, guests, food, drinks)
    const mappedVibes = dinnerParty.vibes?.map((item, i) => {
        return (
        <div key={i}>
            {item.theme? <div>Theme: {item.theme}</div> : null }
            {item.decor? <div>Decor: {item.decor}</div> : null}
            {item.spotify_playlist? <a href={item.spotify_playlist}>Spotify playlist</a> : null}
            {item.games? <div>Games: {item.games}</div> : null}
         </div>)
    })

    const mappedGuests = dinnerParty.guests?.map((item, i) => {
        return (
        <div key={i}>
            {item.name? <div>Name: {item.name}</div> : null }
            {item.contact? <div>Contact: {item.contact}</div> : null}
            {item.plus_ones? <div>Plus ones: {item.plus_ones}</div> : null}
            {item.dietary_restrictions? <div>Dietary Restrictions: {item.dietary_restrictions}</div> : null}
            {item.assigned_dishes? <div>Assigned Dishes: {item.assigned_dishes}</div> : null}
            {item.rsvp_status? <div>RSVP Status: {item.rsvp_status}</div> : null}
            <br></br>
         </div>)
    })

    const mappedFoodMenus = dinnerParty.food_menus?.map((item, i) => {
        return (
        <div key={i}>
            {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
            {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    const mappedDrinkMenus = dinnerParty.drink_menus?.map((item, i) => {
        return (
        <div key={i}>
            {item.recipe_name? <a href={item.recipe_link}>{item.recipe_name}</a> : null }
            {item.ingredients? <div>Ingredients: {item.ingredients}</div> : null}
         </div>)
    })

    //mapping ingredients for grocery list email
    const mappedFoodIngredients = dinnerParty.food_menus?.map((item, i) => {
        return item.ingredients
    })
    const mappedDrinkIngredients = dinnerParty.drink_menus?.map((item, i) => {
        return item.ingredients
    })

    //mapping invited guests for invite email
    const mappedInvitedGuests = dinnerParty.guests?.map((item, i) => {
        const guestName = item.name
        const plusOnes = item.plus_ones ? item.plus_ones : 0
        const guestAssignedDishes = item.assigned_dishes ? item.assigned_dishes : "nothing"

        return (
            `${guestName} is bringing ${plusOnes} additional guests. The dishes you've asked them to bring: ${guestAssignedDishes}.`
        )
    })

    console.log(mappedInvitedGuests)

    // setting email info: details, params, and functions
    const dpDate = dinnerParty.date
    const prettyDate = moment(dpDate).format("MMMM Do, YYYY")
    const partyTime = dinnerParty.time
    const emailName = currentUser.first_name
    const emailAddress = currentUser.email
    console.log(prettyDate)

    const ingredientsParams = {
        foodIngredients: mappedFoodIngredients,
        drinkIngredients: mappedDrinkIngredients,
        emailName: emailName,
        emailAddress: emailAddress,
        prettyDate: prettyDate,
    }

    const inviteParams = {
        emailName: emailName,
        partyTime: partyTime,
        emailAddress: emailAddress,
        prettyDate: prettyDate,
        mappedInvitedGuests: mappedInvitedGuests
    }

    function handleSendEmail() {
        emailjs.send('service_rryf6l2', 'template_jlgx08x', ingredientsParams, 'Qp7H41_fSqAURacWj');
        console.log("clicked")
    }

    function handleSendInviteEmail() {
        emailjs.send('service_rryf6l2', 'template_4a7bfzh', inviteParams, 'Qp7H41_fSqAURacWj');
        console.log("clicked")
    }


    return (
        <div className="view-card">
            <div className="view-card-white">
                <h3 className="view-card-titles">{moment(dpDate).format("MMMM Do, YYYY")} at {dinnerParty.time}</h3>
                <h3 className="view-card-subtitles">{dinnerParty.location}</h3>
                <h4 className="view-card-headers">Vibes</h4>
                    <div className="card-parent">{mappedVibes}</div>
                <h4 className="view-card-headers">Guests</h4>
                    {/* {totalGuests? <h4>Guest total: </h4> : null} */}
                    <div className="card-parent">{mappedGuests}</div>
                <h4 className="view-card-headers">Food</h4>
                    <div className="card-parent">{mappedFoodMenus}</div>
                <h4 className="view-card-headers">Drinks</h4>
                <div className="card-parent">{mappedDrinkMenus}</div>
            </div>
            <button className="edit-dinner-party-button"><Link to={`/dinner-parties/edit/${id}`}>Edit</Link></button>
            <br></br>
            <button className="edit-dinner-party-button" onClick={handleSendEmail}>Email yourself a grocery list</button>
            <button className="edit-dinner-party-button" onClick={handleSendInviteEmail}>Email yourself party details to forward to your guests!</button>
        </div>
    )
}

export default DinnerPartyView

