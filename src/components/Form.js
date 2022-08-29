import { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = (e) => {
    e.preventDefault()

    
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }

  return (
    <form>
       <input
       type='text'
       placeholder='First name'
       value={firstName}
       onChange={(e) => setFirstName(e.target.value)}
       />
       <input
       type='text'
       placeholder='Last name'
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
       />
       <input
       type='text'
       placeholder='Email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
       <input
       type='text'
       placeholder='Password'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
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