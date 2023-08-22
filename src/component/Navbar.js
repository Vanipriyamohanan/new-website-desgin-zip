import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false); // State for blur effect

  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // Calculate the scroll position to trigger the blur effect
    if (scrollY > fullHeight - windowHeight - 100) {
      setBlurBackground(true);
    } else {
      setBlurBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        color
          ? "navbar navbar-expand-lg navbar-dark bg-dark fixed-top header-bg navabr-fox"
          : `navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${
              blurBackground ? "" : ""
            }`
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          +Plus971
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#94d13a" }} />
          ) : (
            <FaBars size={20} style={{ color: "#94d13a" }} />
          )}
        </button>
        <div
          id="navabr-div-pop-up"
          className={
            click ? "collapse navbar-collapse show" : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
