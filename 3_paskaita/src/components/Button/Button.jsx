import "./Button.css";

const Button = (props) => {
  return (
    <div>
      {props.variant && (
        <button className={`${props.variant} btn`}>{props.children}</button>
      )}
      {!props.variant && <button className="btn">{props.children}</button>}
    </div>
  );
};

export default Button;
