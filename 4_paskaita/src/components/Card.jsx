import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <img src={props.url} alt={props.title} />
      <p className="title">{props.title}</p>
      <h2 className="price">{props.price}</h2>
      <button type="submit">Istrinti</button>
    </div>
  );
};

export default Card;
