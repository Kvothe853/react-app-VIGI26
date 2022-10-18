import styled from "styled-components";
import MedsTable from "../MedsTable/MedsTable";

const StyledContainer = styled.div`
  padding: 25px;
`;

const MedsData = (props) => {
  return (
    <StyledContainer>
      <MedsTable meds={props.meds} />
    </StyledContainer>
  );
};

export default MedsData;
