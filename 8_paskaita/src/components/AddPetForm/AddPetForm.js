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
  &:focus {
    outline: none;
  }
`;

const AddPetForm = (props) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  return (
    <StyledForm onSubmit={(e) => props.addPet(e, name, dob, email)}>
      <InputContainer>
        <label>Pet Name</label>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label>Date of birth</label>
        <StyledInput
          type="date"
          min="2000-01-01"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label>Client email</label>
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <Button variable="contained">Add Pet</Button>
    </StyledForm>
  );
};

export default AddPetForm;
