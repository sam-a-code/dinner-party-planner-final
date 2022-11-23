import {Link} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';

function Navbar({  }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      })
      .then(res => {
        if(res.ok) {
          console.log("delete")
        }
      })
    }

    return (
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

export default Navbar
