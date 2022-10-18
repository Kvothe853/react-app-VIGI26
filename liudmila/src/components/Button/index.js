import styled from "styled-components";

const StyledOrangeButton = styled.button`
  background-color: #eb5d05;
  border: 1px solid #eb5d05;
  padding: 10px 24px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
`;
const StyledWhiteButton = styled.button`
  background-color: white;
  border: 1px solid #eb5d05;
  padding: 10px 24px;
  border-radius: 4px;
  color: #eb5d05;
  font-size: 14px;
`;

const Button = (props) => {
  return props.variant === "contained" ? (
    <StyledOrangeButton>{props.children}</StyledOrangeButton>
  ) : (
    <StyledWhiteButton>{props.children}</StyledWhiteButton>
  );
};

export default Button;
