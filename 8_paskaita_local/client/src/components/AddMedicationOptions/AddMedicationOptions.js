import styled from 'styled-components';

const StyledOption = styled.option`
  padding: 5px;
`;

const AddMedicationOptions = (props) => {
  const medication = props.data;
  return <StyledOption value={medication.id}>{medication.name}</StyledOption>;
};

export default AddMedicationOptions;
