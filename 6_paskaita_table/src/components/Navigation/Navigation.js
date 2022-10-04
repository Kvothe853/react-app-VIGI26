import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/Add">Add</Link>
    </div>
  );
};

export default Navigation;
