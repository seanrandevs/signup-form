const checkInfo = (values) => {
  let errors = {}
 // Username
  if(!values.username.trim()) {
    errors.username = "Username required"
  }
  // Email
  if(!values.email) {
    errors.email = "Email required"
  }


}

export default checkInfo