import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img
          src={
            props.imageUrl ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt={props.text || "random user"}
        />
      </div>
      <div>{props.text}</div>
      <div>{props.price}</div>
      <button onClick={props.deleteProduct}>Delete</button>
    </div>
  );
};

export default Card;
