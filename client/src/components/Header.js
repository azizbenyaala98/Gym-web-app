/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useNavigate } from "react-router";
import "../pages/Landing.css";
function Header() {
  const navigate = useNavigate();
  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div id="main">
      <div className="name">
        <h2>STEP UP YOUR </h2>
        <h1>
          <span>FITNESS</span>WITH US
        </h1>
        <p className="details">
          {" "}
          Build Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          <a onClick={navigateToSignUpPage} href className="header-btn">
            JOIN US{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
