import styled from 'styled-components';
import DisplayPrescriptions from '../DisplayPrescriptions/DisplayPrescriptions';
import DisplayLogs from '../DisplayLogs/DisplayLogs';
import { func } from 'joi';

const CardsContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;

  div {
    width: calc(100% / 3 - 30px);
  }
`;

const HealthRecords = (props) => {
  return (
    <CardsContainer>
      <DisplayPrescriptions prescriptionsData={props.prescriptions} />
      <DisplayLogs logsData={props.logs} />
    </CardsContainer>
  );
};

export default HealthRecords;
