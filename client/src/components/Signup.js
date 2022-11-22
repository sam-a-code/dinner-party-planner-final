import { useState } from "react";
// import { useHistory } from "react-router-dom"

function Signup () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]);
    // const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
        }
        fetch("/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    // history.push(`/users/${user.id}`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })}


    return (
    <>
    <h1>Sign up + create account</h1>
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
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
         <br></br>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
         <br></br>
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
         <br></br>
        <button type="submit">Login</button>
      </form>
      </>
    );
}

export default Signup