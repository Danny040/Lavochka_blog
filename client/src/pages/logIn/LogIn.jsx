import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="auth">
      <h1>Log In</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Log In</button>
        <p>Error message!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
