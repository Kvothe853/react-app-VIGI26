import "./Chip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chip = (props) => {
  return (
    <div className={`chip ${props.variant}`}>
      {props.label} <i className="fa-sharp fa-solid fa-circle-xmark"></i>
    </div>
  );
};

export default Chip;
