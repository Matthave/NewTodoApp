import React from "react";
import styled from "styled-components";

const StyledOptionList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43px;
  left: 230px;
  width: 280px;
  height: 310px;
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

const StyledUl = styled.ul`
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding: 7.5px 0px;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
const StyledList = styled.li`
  padding: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #172b4d;
  cursor: pointer;

  &:hover {
    background-color: #f1f2f5;
  }
`;

function ListOptions({
  deleteList,
  listId,
  addNewCardFromList,
  moveListVisibilityFunc,
  deleteCardsVisibility,
  moveCardsFromListFunc,
}) {
  return (
    <StyledOptionList className="listOptions">
      <StyledX className="fas fa-times" />
      <StyledTitle className="listOptions">List Actions</StyledTitle>
      <StyledUl className="listOptions">
        <StyledList onClick={() => addNewCardFromList()}>
          Add card...
        </StyledList>
        <StyledList>Copy list...</StyledList>
        <StyledList
          onClick={() => moveListVisibilityFunc()}
          className="listOptions"
        >
          Move list...
        </StyledList>
      </StyledUl>

      <StyledUl className="listOptions">
        <StyledList onClick={() => moveCardsFromListFunc(listId)}>
          Move every card in this list...
        </StyledList>
        <StyledList onClick={() => deleteCardsVisibility(listId)}>
          Archive every card in this list...
        </StyledList>
      </StyledUl>
      <StyledUl className="listOptions">
        <StyledList onClick={() => deleteList(listId)}>
          Archive this list
        </StyledList>
      </StyledUl>
    </StyledOptionList>
  );
}

export default ListOptions;
