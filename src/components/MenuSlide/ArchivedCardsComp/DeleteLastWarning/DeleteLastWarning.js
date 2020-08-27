import React from "react";
import styled from "styled-components";

const StyledMoveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 250px;
  height: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 125px);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 15px 1px rgba(50, 50, 50, 0.2);
  z-index: 999;
  cursor: initial;
`;

const StyledX = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 14px;
  color: #aaa;
  cursor: pointer;
`;
const StyledTitle = styled.h3`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #aaa;
`;

const StyledButton = styled.button`
  width: 95%;
  height: 32.5px;
  background-color: #cf513d;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 6px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #ef715d;
  }
`;

const StyledText = styled.h4`
  width: 92.5%;
  margin: 15px auto;
  font-weight: 400;
  font-size: 14px;
`;

function DeleteLastWarning({ taskIdToDelete, deleteCard }) {
  return (
    <StyledMoveListWrap className="menu">
      <StyledX className="fas fa-times menu closeWarning" />
      <StyledTitle className="menu">To delete the card?</StyledTitle>
      <StyledText className="menu">
        {
          "All card details will be deleted from the application and it will not be possible to restore the card. There is no going back."
        }
      </StyledText>
      <StyledButton
        className="ultimateDelete"
        onClick={() => deleteCard(taskIdToDelete)}
      >
        Delete
      </StyledButton>
    </StyledMoveListWrap>
  );
}

export default DeleteLastWarning;
