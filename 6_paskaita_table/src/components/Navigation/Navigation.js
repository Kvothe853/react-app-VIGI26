// import "./Navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavgiationBar = styled.div`
  background-color: #eee;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin: 0 14px;
  transition: 0.3s ease-in;
  &:hover {
    color: #000;
  }

  ${NavgiationBar}:hover & {
    background-color: yellow;
    transition: 0.5s ease-in;
  }
`;

const RedLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const Navigation = () => {
  const styles = {
    textDecoration: "none",
  };

  return (
    <NavgiationBar>
      <StyledLink to="/">Home</StyledLink>
      <RedLink to="/Add">Add</RedLink>
    </NavgiationBar>
  );
};

export default Navigation;
