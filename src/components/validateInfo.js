const validateInfo = (values) => {
  let errors = {};

 // Username
  if(!values.username.trim()) {
    errors.username = "Username required"
  }
  // Email
  if(!values.email) {
    errors.email = "Email required"
  }

  if(!values.password) {
    errors.password = "Password is required"
  } else if(values.password.length < 8) { 
    errors.password = "Password needs to be 8 or more characters"
  }

  if(!values.password2) {
    errors.password2 = "Password is required"
  } else if(values.password2 !== values.password) {
    errors.password2 = "Passwords do not match"
  }

  return errors;
}

export default validateInfo