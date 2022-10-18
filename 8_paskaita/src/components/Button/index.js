import styled from "styled-components";

const ContainerButton = styled.button`
  background: #eb5d05;
  border: solid 2px #eb5d05;
  padding: 6px 24px;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
  &:active {
    transform: scale(0.98);
  }
`;

const Outlined = styled(ContainerButton)`
  color: #eb5d05;
  border: solid 2px #eb5d05;
  background: #fff;
  margin: 5px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

const Button = (props) => {
  return props.variable === "contained" ? (
    <ContainerButton onClick={props.func}>{props.children}</ContainerButton>
  ) : (
    <Outlined onClick={(e) => props.deleteFunction(e)}>
      {props.children}
    </Outlined>
  );
};

export default Button;
