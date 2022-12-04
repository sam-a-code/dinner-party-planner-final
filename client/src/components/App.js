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
  const [showLogIn, setShowLogIn] = useState(true)

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

function setShowSignUp() {
  setShowLogIn(!showLogIn)
}

  return (
    <>
      <Navbar currentUser={currentUser} updateUser={updateUser}/>
      {!currentUser ?
        <div className="signup-login-text">
          <h3>Please sign in or create an account to access your dinner parties!</h3>
          {showLogIn ?
          <div>
            <Login updateUser={updateUser} setShowSignUp={setShowSignUp}/>
            <button onClick={setShowSignUp} className="signup-login-toggle-button button">Don't have an account? Sign up</button>
          </div> :
          <div>
            <Signup updateUser={updateUser}/>
            <button onClick={setShowSignUp} className="signup-login-toggle-button button">Log in</button>
          </div>}
        </div>:
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile currentUser={currentUser} dinnerParties={dinnerParties} setDinnerParties={setDinnerParties}/>} />
          <Route path="/create-dinner-party" element={<NewDinnerParty userID={userID} currentUser={currentUser} dinnerParties={dinnerParties} setDinnerParties={setDinnerParties}/>} />
          <Route path="/explore" element={<Explore dinnerParties={dinnerParties}/>} />
          <Route path="/dinner-parties/:id" element={<DinnerPartyView currentUser={currentUser} />} />
          <Route path="/dinner-parties/edit/:id" element={<DinnerPartyEdit />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </>}
    </>
  )
}

export default App;
