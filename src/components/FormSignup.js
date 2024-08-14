import useForm from "./useForm";
import validate from "./validateInfo";
import { Link } from "react-router-dom";


const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = 
    useForm(submitForm, validate);

  return (
  <div className="container">
    <div className="header">Lets get started! Create your account</div>

    <form onSubmit={handleSubmit}>
       <input
       type='text'
       name="firstname"
       placeholder='Enter your firstname'
       value={values.firstname}
       onChange={handleChange}
       />
       {errors.firstname && <p>{errors.firstname}</p>}
       <input
       type='text'
       name="lastname"
       placeholder='Enter your lastname'
       value={values.lastname}
       onChange={handleChange}
       />
       {errors.lastname && <p>{errors.lastname}</p>}
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
       name="confirmPassword"
       value={values.confirmPassword}
       onChange={handleChange}
       />
       {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
       <button className="btn" 
       type="submit">
       Sign up
       </button>

       <span>Already have an account? Login <Link to={"/Login"}>here</Link> </span>
    </form>
  </div>
  )
}

export default FormSignup;