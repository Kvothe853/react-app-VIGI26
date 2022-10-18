import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

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
  margin-top: 5px;
  padding: 8px;
  border: solid 1px #777;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const AddMedsForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <StyledForm onSubmit={(e) => props.addMed(e, name, description)}>
      <InputContainer>
        <label>Name</label>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label>Description</label>
        <StyledInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputContainer>
      <Button variable="contained">Add Medication</Button>
    </StyledForm>
  );
};

export default AddMedsForm;
