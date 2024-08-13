import { useState, useEffect } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = "http://localhost:5047/api/UserForm/GetUsers";
  
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((userData) => {
          setData(userData);
        })
    }, []);
    
    console.log(data);


  const submitForm = () => {
    setIsSubmitted(true)
  }
   return (
    <div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> :
       <FormSuccess />}
    </div>
  )
}

export default Form