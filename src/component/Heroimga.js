import "./Heroimga.css";
import React from "react";

const Heroimga = (props) => {
  return (
    <div className="hero-imga">
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export default Heroimga;
