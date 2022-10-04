import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/Todos" className="link">
        Todos
      </Link>
    </div>
  );
};

export default Navbar;
