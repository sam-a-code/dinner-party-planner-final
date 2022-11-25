import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import NewDP from './NewDP'
import Explore from './Explore'


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
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-dinner-party" element={<NewDP />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      </>
  }
    </>
  );
}

export default App;
