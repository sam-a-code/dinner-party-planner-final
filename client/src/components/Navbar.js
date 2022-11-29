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
      <header className="navbar-parent">
        <Link className="navbar" to="/">Home</Link>
        <Link className="navbar" to="/profile">Profile</Link>
        <Link className="navbar" to="/create-dinner-party">Create Dinner Party</Link>
        <Link className="navbar" to="/explore">Explore</Link>
        {currentUser? <button onClick={handleLogout} className="logout-button">Logout</button> : null}
        <h1 className="site-header">Dinner Party Planner</h1>
      </header>
    );
  }

export default Navbar
