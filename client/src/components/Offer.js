/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../pages/Landing/Landing.css'
import { useNavigate } from "react-router";

function Offer() {
  const navigate = useNavigate();
  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER
        </h1>
        <p className="details"> lorem ispum dolor si amet connsecteteur</p>
        <div className="pr-btns">
          <a onClick={navigateToSignUpPage} href className="pr-btn">
            JOIN NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offer;
