import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../Button';
import AddMedicationOptions from '../AddMedicationOptions/AddMedicationOptions';
import AddPetOptions from '../AddPetOptions/AddPetOptions';

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

const StyledSelect = styled.select`
  margin-top: 5px;
  padding: 8px 0;
  border: solid 1px #777;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const AddPrescriptionForm = (props) => {
  const [loading, setLoading] = useState(true);
  const [prescriptions, setPrescriptions] = useState([]);
  const [medications, setMedications] = useState([]);
  const [pets, setPets] = useState([]);
  // ---
  const [name, setName] = useState('');
  const id = props.children;

  useEffect(() => {
    fetch('http://localhost:3000/pets')
      .then((resp) => resp.json())
      .then((data) => {
        return setPets(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [pets]);

  useEffect(() => {
    fetch('http://localhost:3000/medications')
      .then((resp) => resp.json())
      .then((data) => {
        return setMedications(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [medications]);

  return (
    <StyledForm onSubmit={(e) => props.addPrescription(e, name)}>
      <InputContainer>
        <label>Medication Name</label>
        <StyledSelect
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <option value="">Select Medication</option>
          {medications.map((medication) => (
            <AddMedicationOptions data={medication} />
          ))}
        </StyledSelect>
      </InputContainer>
      <Button variable="contained">Add Prescription</Button>
    </StyledForm>
  );
};

export default AddPrescriptionForm;
