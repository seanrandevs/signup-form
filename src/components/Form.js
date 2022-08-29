import { useState, useRef, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from 
"@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
const userRef = useRef();
const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);


  const onsubmit = (e) => {
    e.preventDefault()

    
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <form>
       <input
       type='text'
       placeholder='First name'
       id="firstName"
       ref={userRef}
       value={firstName}
       onChange={(e) => setFirstName(e.target.value)}
       required
       />
       <input
       type='text'
       placeholder='Last name'
       id="lastName"
       ref={userRef}
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
       required
       />
       <input
       type='text'
       placeholder='Email'
       id="email"
       ref={userRef}
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       />
       <input
       type='text'
       placeholder='Password'
       id="password"
       ref={userRef}
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       required
       />

       <input 
       className="btn"
       type='submit'
       value="Submit"
       />
       
    </form>
  )
}

export default Form