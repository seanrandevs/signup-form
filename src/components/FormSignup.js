import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = 
    useForm(submitForm, validate);

  return (
  <div className="container">
    <div className="header">Lets get started! Create your account</div>

    <form onSubmit={handleSubmit}>
       <input
       type='text'
       name="username"
       placeholder='Enter your username'
       value={values.username}
       onChange={handleChange}
       />
       {errors.username && <p>{errors.username}</p>}
       <input
       type='email'
       name="email"
       placeholder="Enter your Email"
       value={values.email}
       onChange={handleChange}
       />
       {errors.email && <p>{errors.email}</p>}
       <input
       type="password"
       name="password"
       placeholder='Enter your password'
       value={values.password}
       onChange={handleChange}
       />
       {errors.password && <p>{errors.password}</p>}
       <input
       type="password"
       placeholder="Confirm your password"
       name="password2"
       value={values.password2}
       onChange={handleChange}
       />
       {errors.password2 && <p>{errors.password2}</p>}
       <button className="btn" 
       type="submit">
       Sign up
       </button>

       <span>Already have an account? Login <a href="dummylink">here</a></span>
    </form>
  </div>
  )
}

export default FormSignup;