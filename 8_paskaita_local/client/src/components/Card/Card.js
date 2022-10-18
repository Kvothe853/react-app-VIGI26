import PetCard from '../PetCard/PetCard';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = (props) => {
  const pets = props.petsList;

  return (
    <CardContainer key={'lol'}>
      {pets.map((pet) => (
        <PetCard
          petItem={pet}
          deleteFunction={props.deleteFunction}
          logFunction={props.logFunction}
        />
      ))}
    </CardContainer>
  );
};

export default Card;
