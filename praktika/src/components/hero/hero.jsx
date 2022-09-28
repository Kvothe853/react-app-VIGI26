import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <div
      className="main-hero"
      style={{
        backgroundImage: `url("${
          props.heroUrl ||
          "https://images.pexels.com/photos/2719301/pexels-photo-2719301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }")`,
        height: props.height || "400px",
      }}
    >
      <div className="shadow"></div>
      <div className="hero-info">
        <h1>{props.title || "Title goes here"}</h1>
        <p>{props.subtitle || "subtitle"}</p>
      </div>
    </div>
  );
};

export default Hero;
