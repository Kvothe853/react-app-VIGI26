import styled from 'styled-components';

const StyledDiv = styled.div`
  border: solid 2px #eee;
  border-bottom: solid 2px blue;
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

const StyledDate = styled.p``;

const DisplayLogs = (props) => {
  const logs = props.logsData;
  return (
    <>
      {logs.map((log) => (
        <StyledDiv>
          <StyledH1>{log.status}</StyledH1>
          <StyledDescription>{log.description}</StyledDescription>
          <StyledDate>{`${log.date.split('T')[0]}`}</StyledDate>
        </StyledDiv>
      ))}
    </>
  );
};

export default DisplayLogs;
