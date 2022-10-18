import styled from 'styled-components';

const StyledDiv = styled.div`
  border: solid 2px #eee;
  border-bottom: solid 2px green;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin: 15px;
`;

const StyledH1 = styled.h1`
  margin-bottom: 25px;
  font-weight: 500;
`;

const StyledDescription = styled.p`
  margin-bottom: 5px;
`;

const DisplayPrescriptions = (props) => {
  const prescriptions = props.prescriptionsData;

  return (
    <>
      {prescriptions.map((log) => (
        <StyledDiv>
          <StyledH1>{log.name}</StyledH1>
          <StyledDescription>{log.description}</StyledDescription>
          {`${log.date.split('T')[0]}`}
        </StyledDiv>
      ))}
    </>
  );
};

export default DisplayPrescriptions;
