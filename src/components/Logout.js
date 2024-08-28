import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const email = localStorage.getItem("email");

    if (email) {
      try {
        // Update isLoggedIN status to false in the database
        await axios.post("http://localhost:5047/api/UserForm/UpdateLoginStatus", null, {
          params: {
            email: email,
            isLoggedIN: false
          }
        });

        // Clear local storage
        localStorage.removeItem("email");

        // Redirect to login page
        navigate("/login");
      } catch (error) {
        console.error("There was an error logging out:", error);
      }
    }
  };

  return (
    <button className="logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
