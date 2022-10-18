import styled from "styled-components";
import AddPetForm from "../AddPetForm/AddPetForm";
import AddMedsForm from "../AddMedsForm/AddMedsForm";

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: 400px;
  background: #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  z-index: 999;
  &.hidden {
    display: none;
  }
  @media (max-width: 600px) {
    width: fit-content;
  }
`;

const StyledButton = styled.button`
  background: #eb5d05;
  color: #fff;
  cursor: pointer;
  height: 21px;
  width: 21px;
  border: solid 1px #eb5d05;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
  &:hover {
    background: #eb4d08;
  }
`;

const Modal = (props) => {
  if (props.children === "meds") {
    return (
      <StyledModal className={props.modalClass}>
        <StyledButton onClick={props.func}>&#10006;</StyledButton>
        <AddMedsForm addMed={props.addMed} />
      </StyledModal>
    );
  } else {
    return (
      <StyledModal className={props.modalClass}>
        <StyledButton onClick={props.func}>&#10006;</StyledButton>
        <AddPetForm addPet={props.addPet} />
      </StyledModal>
    );
  }
};

export default Modal;
