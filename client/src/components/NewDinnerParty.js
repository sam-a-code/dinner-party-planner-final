import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm, FormProvider, useFormContext } from "react-hook-form"


function NewDinnerParty() {
    const { register, handleSubmit } = useForm()
    const methods = useForm()
    // const [date, setDate] = useState("")
    // const [location, setLocation] = useState("")
    // const [vibes, setVibes] = useState("")
    // const [guests, setGuests] = useState("")
    // const [foodMenu, setFoodMenu] = useState("")
    // const [drinkMenu, setDrinkMenu] = useState("")

    return (
        <div className="new-dinner-party-background">
        <h1 >plan your next dinner party:</h1>
        <FormProvider {...methods}>
            <form classname="new-dinner-party-form" onSubmit={handleSubmit((data)=> {console.log(data)})}>
                <input {...register("location")} placeholder="Location" className="new-dinner-party-form-input"/>
                <br></br>
                <input {...register("date")} placeholder="Date" className="new-dinner-party-form-input"/>
                {<h3 >add guests</h3>}
                <NestedGuests register={register}/>
                {<h3>add vibes</h3>}
                <NestedVibes register={register}/>
                {<h3>add food menus</h3>}
                <NestedFoodMenus register={register}/>
                {<h3>add drink menus</h3>}
                <NestedDrinkMenus register={register}/>
                <br></br>
                <br></br>
                <input type="submit"  className="form-submit-button"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </FormProvider>
        </div>
    )

    function NestedGuests({register}) {
        return (
            <>
            <input {...register("guest_name")} placeholder="Guest name" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("guest_contact")} placeholder="Guest contact info" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("guest_plus_ones")} placeholder="Guest plus ones" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("guest_dietary_restrictions")} placeholder="Guest dietary restrictions" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("guest_assigned_dishes")} placeholder="Guest assigned dishes" className="new-dinner-party-form-input"/>
            <br></br>
            <select {...register("guest_rsvp_status")} placeholder="Guest RSVP status" className="new-dinner-party-form-input">
                <option>Select RSVP status</option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
                <option>Maybe that's probably a no</option>
                </select>
            </>
        )
    }
    function NestedVibes({register}) {
        return (
            <>
            <input {...register("vibes_theme")} placeholder="Theme" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("vibes_decor")} placeholder="Decor" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("vibes_spotify_playlist")} placeholder="Spotify Playlist" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("vibes_games")} placeholder="Games" className="new-dinner-party-form-input"/>
            </>
        )
    }
    function NestedFoodMenus({register}) {
        return (
            <>
            <input {...register("food_recipe_name")} placeholder="Recipe name" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("food_recipe_link")} placeholder="Recipe link" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("food_ingredients")} placeholder="Ingredients" className="new-dinner-party-form-input"/>
            </>
        )
    }
    function NestedDrinkMenus({register}) {
        return (
            <>
            <input {...register("drink_recipe_name")} placeholder="Recipe name" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("drink_recipe_link")} placeholder="Recipe link" className="new-dinner-party-form-input"/>
            <br></br>
            <input {...register("drink_ingredients")} placeholder="Ingredients" className="new-dinner-party-form-input"/>
            </>
        )
    }


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
