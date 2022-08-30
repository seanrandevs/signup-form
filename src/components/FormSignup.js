import useForm from "./useForm";

const FormSignup = () => {
    const { handleChange, values, handleSubmit } = useForm();

  return (
  <div className="container">
    <div className="header">Lets get started! Create your account</div>

    <form onSubmit={handleSubmit}>
       <input
       type='text'
       name="username"
       placeholder='Enter your username'
       id="username"
       value={values.username}
       onChange={handleChange}
       />
       <input
       type='email'
       name="email"
       placeholder="Enter your Email"
       id="email"
       value={values.email}
       onChange={handleChange}
       />
       <input
       type="password"
       name="password"
       placeholder='Enter your password'
       id="password"
       value={values.password}
       onChange={handleChange}
       />
       <input
       type="password"
       placeholder="Confirm your password"
       id="password2"
       name="password2"
       value={values.password2}
       onChange={handleChange}
       />

       <input 
       className="btn"
       type="submit"
       />

       <h5>Already have an account? Login <a href="#">here</a></h5>
    </form>
  </div>
  )
}

export default FormSignup;