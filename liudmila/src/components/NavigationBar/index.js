import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 60px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #eb5d05;
  font-size: 30px;
  font-weight: 500px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  color: #eb9605;

  &:hover {
    color: #eb5d05;
  }
`;

const NavigationBar = () => {
  return (
    <Container>
      <Logo>vetbee</Logo>
      <nav>
        <StyledLink to="/">Pets</StyledLink>
        <StyledLink to="/medications">Medications</StyledLink>
      </nav>
    </Container>
  );
};

export default NavigationBar;
