import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles.scss";
import logo from "../../assets/lavochka2.svg";
import { AuthContext } from "../../context/authContext.jsx";

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <div className="circle">
              <img src={logo} alt="Lavochka" />
              <div className="logoname">
                <span className="lavochka">Lavochka</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=music">
            <h6>Music</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          <Link className="link" to="/?cat=supplements">
            <h6>Supplements</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>LogOut</span>
          ) : (
            <Link className="link" to="/login">
              LogIn
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/createpost">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
