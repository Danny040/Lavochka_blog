import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/lavochka2.svg";
import "../../styles.scss";

const Footer = () => {
  return (
    <footer>
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
      <span>Made with ReactJS and Sass</span>
    </footer>
  );
};

export default Footer;
