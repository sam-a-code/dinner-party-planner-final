import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'


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
    <div>
      <Navbar />
      {!currentUser ? <><Login errors={'please log in'} updateUser={updateUser}/> or <Signup /> </> :
      <Home />
  }
    </div>
  );
}

export default App;
