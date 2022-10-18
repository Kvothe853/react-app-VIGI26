import styled from 'styled-components';
import Button from '../Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  border: solid 1px #333;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const AddLogForm = (props) => {
  const id = props.children;
  return (
    <StyledForm>
      <InputContainer>
        <label>Status:</label>
        <StyledInput></StyledInput>
      </InputContainer>
      <InputContainer>
        <label>Description:</label>
        <StyledInput></StyledInput>
      </InputContainer>
      <Button variable="contained">Add Prescription</Button>
    </StyledForm>
  );
};

export default AddLogForm;
