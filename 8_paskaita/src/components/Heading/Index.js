import styled from "styled-components";
import Button from "../Button";

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
`;

const Heading = (props) => {
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
