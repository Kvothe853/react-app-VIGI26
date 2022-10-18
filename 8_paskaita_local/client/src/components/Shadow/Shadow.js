import styled from "styled-components";

const StyledShadow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: .;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  min-width: 400px;
  &.hidden {
    display: none;
  }
`;

const Shadow = (props) => {
  return (
    <StyledShadow className={props.className} onClick={props.removeShadow} />
  );
};

export default Shadow;
