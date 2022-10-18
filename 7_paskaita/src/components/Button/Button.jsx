import "./Button.css";
import styled from "styled-components";

const StyledButton = styled.div`
  padding: 20px;
  background-color: red;
`;

const Text = styled.p`
  color: orange;
`;

const Button = (props) => {
  return (
    <StyledButton>
      <Text>
        <button>{props.children}</button>
      </Text>
    </StyledButton>
  );
};

export default Button;
