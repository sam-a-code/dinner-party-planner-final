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
        {currentUser? <button onClick={handleLogout}>Logout</button> : null}
        <Link to="/">   Home   </Link>
        <Link to="/profile">   Profile   </Link>
        <Link to="/create-dinner-party">   Create Dinner Party</Link>
      </header>
    );
  }

export default Navbar
