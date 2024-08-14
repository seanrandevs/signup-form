import { useState, useEffect, } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
   setValues({
    ...values, 
    [name]: value
   });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(values);
    setErrors(validate(values));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0) {
      try {
        // Update with your Swagger API endpoint
        const response = await axios.post(`http://localhost:5047/api/UserForm/AddUser`, null, {
          params: {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password
          }
        });
        console.log('User added:', response.data);
        callback();
      } catch (error) {
        console.error('There was an error adding the user:', error);
      }
    }
  };

  useEffect (
    () => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return{ handleChange, values, handleSubmit, errors };

};


export default useForm;

// const handleSubmit = e => {
//   e.preventDefault();
//    console.log(values);
//   setErrors(validate(values))
//   setIsSubmitting(true)
// }