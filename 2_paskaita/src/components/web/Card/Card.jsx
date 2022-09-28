import "./Card.css";

const Card = (props) => {
  return (
    <div className={props.className}>
      <img
        src={
          props.url ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt={props.name || "random user"}
      />
      <div className="user-name">{props.name || "Random User"}</div>
      {props.name.length > 10 && <p>Bitch'n</p>}
      {props.className ? <p>Extra class added</p> : <p>No class added</p>}
    </div>
  );
};

export default Card;
