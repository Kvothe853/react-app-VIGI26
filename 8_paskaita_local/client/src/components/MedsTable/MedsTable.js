import styled, { keyframes } from 'styled-components';

const test = keyframes`
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
`;

const StyledTable = styled.table`
  color: #333;
  visibility: hidden;
  width: 100%;
  border-collapse: collapse;
  animation: ${test} 1.2s linear forwards;
`;

const StyledTr = styled.tr`
  border: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:tr:hover {
    background-color: #ddd;
  }
`;

const StyledTd = styled.td`
  padding: 8px;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #eb5d05;
  color: white;
`;

const EmptyTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  background: rgba(255, 0, 0, 0.25);
`;

const MedsTable = (props) => {
  const meds = props.meds;

  return (
    <StyledTable>
      <thead>
        <StyledTr>
          <StyledTh>ID</StyledTh>
          <StyledTh>Name</StyledTh>
          <StyledTh>Description</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {meds.map((med) => (
          <StyledTr key={meds.id}>
            <StyledTd>{med.id}</StyledTd>
            {!med.name ? (
              <EmptyTd>NO-NAME</EmptyTd>
            ) : (
              <StyledTd>{med.name}</StyledTd>
            )}
            {!med.description ? (
              <EmptyTd>NO-DESCRIPTION</EmptyTd>
            ) : (
              <StyledTd>{med.description}</StyledTd>
            )}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default MedsTable;
