import React from "react";
import "./Button.css";

// (props) arna ({destructed text})

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <button style={{ backgroundColor: props.color || "#82AFAC" }}>
        {props.buttonText || "Button"}
      </button>
    </div>
  );
};

export default Button;
