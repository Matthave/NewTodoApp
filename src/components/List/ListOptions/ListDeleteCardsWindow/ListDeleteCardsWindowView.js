import React from "react";
import styled from "styled-components";

const StyledMoveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43px;
  left: 230px;
  width: 280px;
  height: 200px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
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

function ListDeleteCardsWindowView({ deleteCardsFromListFunc, listId }) {
  return (
    <StyledMoveListWrap className="listOptions">
      <StyledX className="fas fa-times" />
      <StyledTitle className="listOptions">Archive All Cards</StyledTitle>
      <StyledText className="listOptions">
        {
          "This option will remove all cards from the list on the board. To view archived cards and restore them, click 'Show Menu' > 'Archived elements'"
        }
      </StyledText>
      <StyledButton onClick={() => deleteCardsFromListFunc(listId)}>
        Archive All
      </StyledButton>
    </StyledMoveListWrap>
  );
}

export default ListDeleteCardsWindowView;
