import React from "react";
import IntroImg from "../assets/lap.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Heroimg.css";

const Heroimg = () => {
  return (
    <div className="hero jumbotron jumbotron-fluid bg-transparent">
      <div className="container">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="intro-img" />
        </div>
        <div className="content text-center text-light">
          <p> HI, WELCOME TO </p>
          <h1 id="h1-tag-h1">+Plus971</h1>

          <Link to="/About" className="btn btn-primary custom-btn">
            ABOUT
          </Link>
          <Link to="/Contact" className="btn btn-secondary custom-btn">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
