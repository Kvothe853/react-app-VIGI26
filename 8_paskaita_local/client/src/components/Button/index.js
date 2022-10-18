import styled from 'styled-components';

const ContainerButton = styled.button`
  background: #eb5d05;
  border: solid 2px #eb5d05;
  padding: 6px 24px;
  color: #fff;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  letter-spacing: 0.02rem;
  margin: 5px;
  font-weight: 600;
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
  let test = props.modal ? props.modal : props.func;

  const lohas = (e) => {
    test();
  };
  return props.variable === 'contained' ? (
    props.func ? (
      <ContainerButton onClick={lohas}>{props.children}</ContainerButton>
    ) : (
      <ContainerButton>{props.children}</ContainerButton>
      // <ContainerButton onClick={(e) => props.logFunction(e)}>
      //   {props.children}
      // </ContainerButton>
    )
  ) : props.func ? (
    <Outlined onClick={lohas}>{props.children}</Outlined>
  ) : (
    <Outlined onClick={(e) => props.deleteFunction(e)}>
      {props.children}
    </Outlined>
  );
};

export default Button;
