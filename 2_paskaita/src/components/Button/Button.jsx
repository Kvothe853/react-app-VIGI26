import React from "react";
import "./Button.css";

// (props) arna ({destructed text})

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <button
        type={props.type || "button"}
        className="button"
        style={{ backgroundColor: props.bgColor || "#408140" }}
      >
        {props.text || "Hey"}
      </button>
    </div>
  );
};

export default Button;
