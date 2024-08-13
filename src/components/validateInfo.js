const validateInfo = (values) => {
  let errors = {};

 // Username
  if(!values.firstname.trim()) {
    errors.firstname = "First Name required"
  }

  if(!values.lastname.trim()) {
    errors.lastname = "Last Name required"
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

  if(!values.confirmPassword) {
    errors.confirmPassword = "Please Confirm Password"
  } else if(values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match"
  }

  return errors;
}

export default validateInfo