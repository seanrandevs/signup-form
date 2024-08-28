import { useState, useEffect, } from "react";
import axios from "axios";

const useForm = (callback, validate, data) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
   setValues({
    ...values, 
    [name]: value
   });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      try {
        // Make a GET request to your Swagger API to fetch the user by email
        const response = await axios.get("http://localhost:5047/api/UserForm/GetUserByEmail", {
          params: {
            email: values.email
          }
        });
    
        // Check if a user is found (response.data is an array)
        if (response.data.length > 0) {
          const user = response.data[0]; // Assuming the first row contains the user details
    
          // Compare the provided password with the stored password
          if (user.password === values.password) {
            console.log('User exists and password matches:', user);
    
            // Proceed to log in the user and update the isLoggedIN status
            const loginResponse = await axios.post("http://localhost:5047/api/UserForm/UpdateLoginStatus", null, {
              params: {
                email: values.email,
                isLoggedIN: true
              }
            });
    
            if (loginResponse.data.success) {
              setUsers(user);  // Update the users state
              console.log('User logged in successfully.');
              return true; // Return success status

              // Proceed with form submission or redirect to the dashboard, etc.
            } else {
              console.error('Failed to update login status.');
            }
    
          } else {
            console.error('Password does not match.');
          }
        } else {
          console.error('User does not exist.');
        }
      } catch (error) {
        console.error('There was an error:', error);
      }
    }
  };


  useEffect(() => {
    if (users) {
      console.log('Users state has been updated:', users);
    }
  }, [users]);
  

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(values);
    setErrors(validate(values));

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

  return{ handleChange, values, handleSubmit, errors, handleLoginSubmit, users };

};


export default useForm;