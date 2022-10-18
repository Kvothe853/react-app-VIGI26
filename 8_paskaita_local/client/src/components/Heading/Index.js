import styled from 'styled-components';
import Button from '../Button';

const StyledHeading = styled.div`
  font-size: 40px;
  font-weigth: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  button {
    text-transform: uppercase;
  }
`;

const Heading = (props) => {
  if (Array.isArray(props.children)) {
    return (
      <StyledHeading>
        <div>{props.title}</div>
        <ButtonsContainer>
          <Button
            variable="contained"
            func={props.addPrescription}
            modal={props.modal}
            formType="prescription"
          >
            {props.children[0]}
          </Button>
          <Button func={props.addLog} modal={props.modal} formType="log">
            {props.children[1]}
          </Button>
        </ButtonsContainer>
      </StyledHeading>
    );
  }
  return (
    <StyledHeading>
      <div>{props.title}</div>

      <ButtonsContainer>
        <Button variable="contained" func={props.func}>
          {props.children}
        </Button>
      </ButtonsContainer>
    </StyledHeading>
  );
};

export default Heading;
