import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      className="hero-wrapper"
      style={{
        backgroundImage: `url("${
          props.url ||
          "https://cdn.pixabay.com/photo/2018/09/05/12/01/nature-3656121_960_720.jpg"
        }")`,
      }}
    >
      <h1 className="hero-title">{props.title || "Title"}</h1>
      <p className="hero-text-1">{props.text1 || "Some about text"}</p>
      <p className="hero-text-2">{props.text2 || "in two lines"}</p>
      <div>{props.children}</div>
    </div>
  );
};

export default Hero;
