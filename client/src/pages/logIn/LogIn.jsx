import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext.jsx";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    })); // prev - previous
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Log In</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Log In</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
