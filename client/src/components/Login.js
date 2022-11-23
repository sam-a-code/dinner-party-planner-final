import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Login({  }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    function handleSubmit(e) {
      e.preventDefault();
      const user = {
        username: username,
        password: password
      }
    }

    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                navigate(`/users/${user.id}`)
            })
        }else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
         <br></br>
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login
