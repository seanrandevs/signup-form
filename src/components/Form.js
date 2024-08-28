import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormSuccess from "./FormSuccess";
import Login from "./Login";

const Form = ({ isLoginSuccessful }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoginSuccessful) {
      navigate("/login");
    }
  }, [isLoginSuccessful, navigate]);

  return (
    <div>
      {isLoginSuccessful ? <FormSuccess /> : <Login />}
    </div>
  );
};

export default Form;