import styled from 'styled-components';
import Button from '../Button';
import PetData from '../PetData/PetData';

const Card = styled.div`
  margin: 25px;
  width: calc(100% / 3 - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 16px 0;
  border: solid 1px #ddd;
  @media (max-width: 980px) {
    width: calc(100% / 2 - 52px);
  }
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const PetTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const DateAndEmail = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PetCard = (props) => {
  const pet = props.petItem;
  if (pet.archived !== 1) {
    return (
      <Card key={pet.id}>
        <PetTitle>{pet.name}</PetTitle>
        <DateAndEmail>
          <PetData date={pet.dob} />
          <div>{pet.client_email}</div>
        </DateAndEmail>
        <ButtonsContainer>
          <Button
            variable="contained"
            logFunction={(e) => props.logFunction(pet.id)}
          >
            VIEW LOG
          </Button>
          <Button deleteFunction={(e) => props.deleteFunction(pet.id)}>
            DELETE
          </Button>
        </ButtonsContainer>
      </Card>
    );
  }
};

export default PetCard;
