import styled from 'styled-components';

const StyledOption = styled.option`
  padding: 5px;
`;

const AddPetOptions = (props) => {
  const pet = props.data;
  return <StyledOption value={pet.id}>{pet.name}</StyledOption>;
};

export default AddPetOptions;
