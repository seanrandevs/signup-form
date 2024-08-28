import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const { handleChange, values, handleLoginSubmit, errors } = useForm(null, validate);
  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = await handleLoginSubmit(e);

    if (isSuccess) {
      // Store email in local storage
      localStorage.setItem("email", values.email);
      onLoginSuccess(); // Update the parent state to true
      navigate("/"); // Redirect to the main form or success page
    }
  };

  return (
    <div className="container">
      <div className="header">Login to your account</div>
      <form onSubmit={onLoginSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <span>Don't have an account? <Link to={"/signup"}>Sign up!</Link></span>
    </div>
  );
};

export default Login;
