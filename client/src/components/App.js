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


function App() {
  const [currentUser, setCurrentUser] = useState(false)

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


  return (
    <>
      <Navbar currentUser={currentUser} />
      {!currentUser ? <><Login errors={'please log in'} updateUser={updateUser}/> or <Signup /> </> :
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile currentUser={currentUser}/>} />
        <Route path="/create-dinner-party" element={<NewDinnerParty />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dinner-parties/:id" element={<DinnerPartyView />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      </>
  }
    </>
  );
}

export default App;
