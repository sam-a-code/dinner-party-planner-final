import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import NewDinnerParty from './NewDinnerParty'
import Explore from './Explore'
import DinnerPartyView from './DinnerPartyView';
import DinnerPartyEdit from './DinnerPartyEdit'


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [dinnerParties, setDinnerParties] = useState(currentUser.dinner_parties)


  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

  const userID = currentUser.id
  console.log(userID)

  return (
    <>
      <Navbar currentUser={currentUser} updateUser={updateUser}/>
      {!currentUser ?
        <div className="signup-login-text">
          <h3>Please sign in to access your dinner parties!</h3>
          <Login errors={'please log in'} updateUser={updateUser}/> or
          <Signup />
        </div> :
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile currentUser={currentUser} dinnerParties={dinnerParties} setDinnerParties={setDinnerParties}/>} />
          <Route path="/create-dinner-party" element={<NewDinnerParty userID={userID} currentUser={currentUser} dinnerParties={dinnerParties} setDinnerParties={setDinnerParties}/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dinner-parties/:id" element={<DinnerPartyView currentUser={currentUser} />} />
          <Route path="/dinner-parties/edit/:id" element={<DinnerPartyEdit />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </>}
    </>
  )
}

export default App;
