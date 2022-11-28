import {Link} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import { useNavigate } from "react-router-dom"

function Navbar({ currentUser }) {
  const navigate = useNavigate();

    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      })
      .then(res => {
        if(res.ok) {
          navigate(`/`)
        }
      })
    }

    return (
      <header>
        <Link to="/">   Home   </Link>
        <Link to="/profile">   Profile   </Link>
        <Link to="/create-dinner-party">   Create Dinner Party</Link>
        <Link to="/explore">   Explore</Link>
        <Link to="/dinner-parties/:id">   Dinner Parties</Link>
        {currentUser? <button onClick={handleLogout}>Logout</button> : null}
      </header>
    );
  }

export default Navbar
